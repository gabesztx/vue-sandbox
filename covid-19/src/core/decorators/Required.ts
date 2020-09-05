import { decorateProperty } from '@/core/decorators/LayoutDataModel';
export function Required(required = true): PropertyDecorator {
  return decorateProperty('required', required);
}
