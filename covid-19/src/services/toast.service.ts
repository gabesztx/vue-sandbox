import { ToastProgrammatic as Toast } from 'buefy';
export class ToastService {
  open(msg: string, type?: string) {
    Toast.open({ message: msg, type: type ? type : 'is-primary' });
  }
}
