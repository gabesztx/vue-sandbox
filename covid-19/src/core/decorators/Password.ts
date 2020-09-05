import { InputType } from '@/core/decorators/InputType';
export function Password(): PropertyDecorator {
  return InputType('password');
}
