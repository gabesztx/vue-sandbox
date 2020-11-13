import Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

const email = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

extend('required', required);
extend('email', email);

// TODO kiszervezni ezt mert nagy a mérete és a szar lesz tőle a page load
