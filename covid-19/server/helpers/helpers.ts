import moment from 'moment';

const humps = require('humps');
export const transformCamelizeKeys = (obj: any) => humps.camelizeKeys(obj);
export const getPreviousDayOfNumber = (day: number | undefined) => moment().subtract(day, 'day').format('YYYY-MM-DD');
