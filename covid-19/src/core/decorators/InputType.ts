import { decorateProperty } from '@/core/decorators/LayoutDataModel';
export function InputType(subtype: string): PropertyDecorator {
  return decorateProperty('subtype', subtype);
}
