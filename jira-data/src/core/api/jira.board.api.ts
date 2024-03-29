import http from "@/core/services/http.service";
import { Board, BoardListQuery } from "@/core/dataTypes/types/board.interface";

export const getAllBoards = (): Promise<BoardListQuery> =>
  http.get<never>(`/rest/agile/1.0/board`)
  // .get<never>(`/rest/api/3/dashboard`)
  .then((response) => response.data);

export const getSprintsFromBoard = (boardId: number): Promise<any> =>
  http.get<never>(`/rest/agile/1.0/board/${boardId}/sprint`)
  .then((response) => response.data);

export const getIssuesFromSprint = (sprintId: number): Promise<any> =>
  // http.get<never>(`/rest/agile/latest/sprint/${sprintId}/issue?jql=issuetype=Story`)
  // http.get<never>(`/rest/agile/1.0/sprint/${sprintId}/issue?jql=issuetype=Story`)
  http.get<never>(`/rest/api/2/issue/138044`)
  .then((response) => response.data);


/*export const getBoardIssue = (boardId: number): Promise<any> =>
  // jql=issuetype=Story%20AND%20status="In%20Progress"%20AND%20assignee=gabor.martus
  http.get<never>(`/rest/agile/1.0/board/${boardId}/issue?startAt=0&maxResults=50`)
  .then((response) => response.data);*/

// V3_API
/*const bodyData = {
  "timeSpentSeconds": 200,
};*/
// http.get<never>(`/rest/api/3/dashboard`)
// http.get<never>(`/rest/api/3/dashboard/10001`)
// http.get<never>(`/rest/api/3/project/10000`)
// http.get<never>(`/rest/api/3/issue/HUGODEV-15997`)
// http.get<never>(`/rest/api/3/issue/GT-13/worklog/10001`)
// http.put<never>(`/rest/api/3/issue/GT-13/worklog/10001`, bodyData)
// http.post<never>(`/rest/api/3/issue/GT-13/worklog`, bodyData)
// http.get<never>(`/rest/api/3/users/search`)
