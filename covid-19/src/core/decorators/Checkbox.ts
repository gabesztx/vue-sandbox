import { InputType } from '@/core/decorators/InputType';
export function Checkbox(): PropertyDecorator {
  return InputType('checkbox');
}
