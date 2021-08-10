export type project_type = "BACKEND" | "FRONTEND" | "EMPTY";
export interface Project {
  name: string;
  project_path: string;
  type: project_type;
}