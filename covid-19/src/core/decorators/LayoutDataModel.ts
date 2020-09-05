import 'reflect-metadata';
// import * as _ from 'lodash';
import { MetadataKeys } from '@/core/enums';
export const LAYOUT_META = 'layout:metadata';

export function Legend(legend: string): ClassDecorator {
  return (target: any) => {
    let meta: any = {};
    if (Reflect.hasMetadata(MetadataKeys.VUENGIN, target)) {
      meta = Reflect.getMetadata(MetadataKeys.VUENGIN, target);
    }
    Reflect.defineMetadata(MetadataKeys.VUENGIN, Object.assign({}, meta, { legend }), target);
  };
}

export function decorateProperty(prop: string, value: any) {
  return (target: any, key: string | symbol) => {
    let meta: any = {};
    if (Reflect.hasMetadata(MetadataKeys.VUENGIN_PROP, target, key)) {
      meta = Reflect.getMetadata(MetadataKeys.VUENGIN_PROP, target, key);
    }
    Reflect.defineMetadata(MetadataKeys.VUENGIN_PROP, Object.assign({}, meta, { [prop]: value, key }), target, key);
  };
}

export function multiDecorateProperty(props: string[], values: any[]) {
  return (target: any, key: string | symbol) => {
    for (const idx in props) {
      let meta: any = {};
      if (Reflect.hasMetadata(MetadataKeys.VUENGIN_PROP, target, key)) {
        meta = Reflect.getMetadata(MetadataKeys.VUENGIN_PROP, target, key);
      }
      Reflect.defineMetadata(
        MetadataKeys.VUENGIN_PROP,
        Object.assign({}, meta, { [props[idx]]: values[idx], key }),
        target,
        key
      );
    }
  };
}

export function LayoutModel(name: string, debug = false): ClassDecorator {
  return (target: Function) => {
    const tmpInstance = Reflect.construct(target, []);
    const props: any = {};
    for (const prop of Reflect.ownKeys(tmpInstance)) {
      let type = 'text';
      if (tmpInstance?.[prop]) {
        if (typeof tmpInstance?.[prop] === 'object') {
          type = Reflect.getPrototypeOf(tmpInstance?.[prop]).constructor.name;
          if (debug) console.log(prop, type);
        } else {
          type = (typeof tmpInstance?.[prop]).replace(
            /(.)(.*)/,
            (m: any, $1: any, $2: any) => `${$1.toUpperCase()}${$2}`
          );
          if (debug) console.log(prop, type);
        }
      } else {
        if (debug) console.log(prop, null);
      }

      const meta = Reflect.getMetadata(MetadataKeys.VUENGIN_PROP, tmpInstance, prop as string);

      props[prop] = Object.assign({}, meta, { modelType: type });
    }
    let meta;
    if (Reflect.hasMetadata(MetadataKeys.VUENGIN, target)) {
      meta = Reflect.getMetadata(MetadataKeys.VUENGIN, target);
    }
    Reflect.defineMetadata(
      MetadataKeys.VUENGIN,
      Object.assign({}, meta, {
        name,
        props,
      }),
      target
    );
  };
}
