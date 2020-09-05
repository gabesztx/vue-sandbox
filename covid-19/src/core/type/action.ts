import { HasData, NativeInputEvent } from '@/core/interfaces';
export type Action = ($ev: NativeInputEvent, $me: HasData) => void;
