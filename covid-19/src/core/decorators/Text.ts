import { InputType } from '@/core/decorators/InputType';
export function Text(): PropertyDecorator {
  return InputType('text');
}
