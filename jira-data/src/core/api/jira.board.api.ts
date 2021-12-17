import http from "@/core/services/http.service";
import { Board, BoardListQuery } from "@/core/dataTypes/types/board.interface";
import { EpicsQuery } from "@/core/dataTypes/types/epics.interface";
import { ProjectQuery } from "@/core/dataTypes/types/project.interface";

export const getAllBoards = (): Promise<BoardListQuery> =>
  http
  .get<never>(`/rest/agile/latest/board`)
  // .get<never>(`/rest/api/3/dashboard`)
  .then((response) => response.data);

export const getBoard = (boardId: number): Promise<Board> =>
  http.get<never>(`/rest/agile/latest/board/${boardId}`)
  .then((response) => response.data);

export const getBoardEpics = (boardId: number): Promise<EpicsQuery> =>
  http.get<never>(`/rest/agile/latest/board/${boardId}/epic?startAt=0&maxResults=50`)
  .then((response) => response.data);

export const getBoardProjects = (boardId: number): Promise<ProjectQuery> =>
  http.get<never>(`/rest/agile/latest/board/${boardId}/project`)
  .then((response) => response.data);

// const
export const getBoardIssue = (boardId: number): Promise<any> =>
  // jql=issuetype=Story%20AND%20status="In%20Progress"%20AND%20assignee=gabor.martus
  //
  http.get<never>(`/rest/agile/latest/board/${boardId}/issue?startAt=0&maxResults=100&jql=issuetype=Story`)
  .then((response) => response.data);

export const getEpic = (): Promise<any> =>
  http.get<never>(`/rest/agile/1.0/epic/none/issue?startAt=0&maxResults=100`)
  .then((response) => response.data);

const bodyData = {
  "timeSpentSeconds": 200,
};
export const getBoardAllQuickFilters = (boardId: number): Promise<any> =>
  http.get<never>(`/rest/agile/1.0/issue/HUGODEV-15997`)
  // http.get<never>(`/rest/api/2/user?username=gergely.bezsenyi`)
  // http.get<never>(`/rest/api/3/dashboard`)
  // http.get<never>(`/rest/api/3/dashboard/10001`)
  // http.get<never>(`/rest/api/3/project/10000`)
  // http.get<never>(`/rest/api/3/issue/HUGODEV-15997`)
  // http.get<never>(`/rest/api/3/issue/GT-13/worklog/10001`)
  // http.put<never>(`/rest/api/3/issue/GT-13/worklog/10001`, bodyData)
  // http.post<never>(`/rest/api/3/issue/GT-13/worklog`, bodyData)
  // http.get<never>(`/rest/api/3/users/search`)
  .then((response) => response.data);
