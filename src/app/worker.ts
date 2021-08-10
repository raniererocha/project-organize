import shell from "shelljs";
import { mkdir } from "fs/promises";
import createProjectFolder from "./createProject";
import createPath from "./createPath";

export type project_type = "BACKEND" | "FRONTEND" | "EMPTY";
export interface Project {
  name: string;
  project_path: string;
  type: project_type;
}

const start = async (c: Project) => {
  const complete_path = createPath(c.name, c.project_path)
  createProjectFolder(complete_path, c.type);
};

export default start;
