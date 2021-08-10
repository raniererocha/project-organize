import createProjectFolder from "./createProject";
import createPath from "./createPath";
import { shellMsg } from "./shellComponents";

export type project_type = "BACKEND" | "FRONTEND" | "EMPTY";
export interface Project {
  name: string;
  project_path: string;
  type: project_type;
}

const start = async (c: Project) => {
  if (c.type) {
    const complete_path = createPath(c.name, c.project_path);
    createProjectFolder(complete_path, c.type);
  } else {
    shellMsg("O Tipo do projeto não foi selecionado. Por favor, selecione um!");
  }
};

export default start;
