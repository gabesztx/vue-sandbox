import { decorateProperty } from '@/core/decorators/LayoutDataModel';
export function Disabled(disabled = true): PropertyDecorator {
  return decorateProperty('disabled', disabled);
}
