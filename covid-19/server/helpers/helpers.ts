const humps = require('humps');
export const transformCamelizeKeys = (obj: any) => humps.camelizeKeys(obj);
