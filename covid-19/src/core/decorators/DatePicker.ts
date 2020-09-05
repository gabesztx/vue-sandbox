import { InputType } from '@/core/decorators/InputType';
export function DatePicker(): PropertyDecorator {
  return InputType('date');
}
