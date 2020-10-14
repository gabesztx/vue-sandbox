import { entries, groupBy, orderBy } from 'lodash';
import { MetadataKeys } from '@/core/enums';

// TODO
export function buildLayout(...models: any[]) {
  const layoutModel: any = {};
  const layoutMeta: any[] = [];
  models.forEach((model) => {
    const meta = Reflect.getMetadata(MetadataKeys.VUENGIN, Reflect.getPrototypeOf(model).constructor);
    layoutModel[meta.name] = model;
    const propMetas = entries(groupBy(orderBy(meta.props, ['rowOrder']), 'rowName')).map((entry) => {
      const row = entry[0];
      const fieldMetas = orderBy(entry[1], ['order']);
      return {
        type: 'box',
        name: `${meta.name}_${row}`,
        classes: 'tile is-child columns',
        data: fieldMetas.map((field) => ({
          ...field,
          name: field.key,
          type: field.type || 'input',
          subtype: field.subtype || field.modelType.toLowerCase() || 'text',
          data: `model.${meta.name}.${field.key}`,
        })),
      };
    });
    if (meta.legend)
      propMetas.unshift({
        type: 'box',
        name: 'title',
        classes: 'tile is-child columns',
        data: [
          {
            type: 'legend',
            name: meta.legend,
            classes: 'column is-12',
          },
        ],
      });
    layoutMeta.push({
      name: meta.name,
      type: 'box',
      /*classes: 'box tile is-parent is-vertical',*/
      data: propMetas,
    });
  });
  return { model: layoutModel, meta: layoutMeta };
}
