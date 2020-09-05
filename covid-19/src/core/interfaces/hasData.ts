export interface HasData {
  data: import('lodash').Many<string | number | symbol>;
  subtype: string;
}
