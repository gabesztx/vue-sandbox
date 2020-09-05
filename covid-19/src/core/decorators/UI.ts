import { decorateProperty } from '@/core/decorators/LayoutDataModel';
export function UI(ui = ''): PropertyDecorator {
  return decorateProperty('ui', ui);
}
