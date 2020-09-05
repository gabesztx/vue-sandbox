import { decorateProperty } from '@/core/decorators/LayoutDataModel';
export function Classes(classes = 'column'): PropertyDecorator {
  return decorateProperty('classes', classes);
}
