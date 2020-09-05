import { InputType } from '@/core/decorators/InputType';
export function Numeric(): PropertyDecorator {
  return InputType('number');
}
