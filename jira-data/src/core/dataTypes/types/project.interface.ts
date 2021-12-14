export interface ProjectCategory {
  description: string;
  id: string;
  name: string;
  self: string;
}

export interface Project {
  id: string;
  key: string;
  name: string;
  projectCategory: ProjectCategory;
  projectTypeKey: string;
  self: string;
}

export interface ProjectQuery {
  isLast: boolean;
  maxResults: number;
  startAt: number;
  total: number;
  value: Project[];
}
