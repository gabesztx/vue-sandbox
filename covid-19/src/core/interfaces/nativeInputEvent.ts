import { HasValue, HasChecked } from '@/core/interfaces';
export interface NativeInputEvent {
  target: HasValue & HasChecked;
}
