export interface Epics {
  id: number;
  self: string;
  name: string;
  summary: string;
  color: { key: string };
  type: string;
  done: boolean;
}

export interface EpicsQuery {
  isLast: boolean;
  maxResults: number;
  startAt: number;
  total: number;
  value: Epics[];
}
