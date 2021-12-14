import http from "@/core/services/http.service";
import { Board, BoardListQuery } from "@/core/dataTypes/types/board.interface";
import { EpicsQuery } from "@/core/dataTypes/types/epics.interface";
import { ProjectQuery } from "@/core/dataTypes/types/project.interface";

export const getAllBoards = (): Promise<BoardListQuery> =>
  http
  .get<never>(`/rest/agile/1.0/board`)
  .then((response) => response.data);

export const getBoard = (boardId: number): Promise<Board> =>
  http.get<never>(`/rest/agile/1.0/board/${boardId}`)
  .then((response) => response.data);

export const getBoardEpics = (boardId: number): Promise<EpicsQuery> =>
  http.get<never>(`/rest/agile/1.0/board/${boardId}/epic?startAt=0&maxResults=50`)
  .then((response) => response.data);

export const getBoardProjects = (boardId: number): Promise<ProjectQuery> =>
  http.get<never>(`/rest/agile/1.0/board/${boardId}/project`)
  .then((response) => response.data);

// const
export const getBoardIssue = (boardId: number): Promise<any> =>
  // jql=issuetype=Bug%20AND%20status="In%20Progress"%20AND%20assignee=gabor.martus
  http.get<never>(`/rest/agile/1.0/board/${boardId}/issue?startAt=0&maxResults=100`)
  .then((response) => response.data);

export const getEpic = (): Promise<any> =>
  http.get<never>(`/rest/agile/1.0/epic/none/issue?startAt=0&maxResults=100`)
  .then((response) => response.data);
