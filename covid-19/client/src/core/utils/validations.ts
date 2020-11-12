import { required } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

const email = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

extend('required', required);
extend('email', email);

// TODO kiszervezni ezt mert nagy a mérete és a szar lesz tőle a page load
