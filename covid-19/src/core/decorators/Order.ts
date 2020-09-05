import { decorateProperty } from '@/core/decorators/LayoutDataModel';
export function Order(order: number): PropertyDecorator {
  return decorateProperty('order', order);
}
