export interface Board {
  id: number;
  self: string;
  name: string;
  type: string;
}

export interface BoardListQuery {
  isLast: boolean;
  maxResults: number;
  startAt: number;
  total: number;
  value: Board[];
}
