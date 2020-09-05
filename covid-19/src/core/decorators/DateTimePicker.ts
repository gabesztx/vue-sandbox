import { InputType } from '@/core/decorators/InputType';
export function DateTimePicker(): PropertyDecorator {
  return InputType('datetime');
}
