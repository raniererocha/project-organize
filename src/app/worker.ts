import createProjectFolder from "./createProject";
import createPath from "./createPath";
import { shellMsg } from "./shellComponents";
import { Project } from "../../types/project";

const start = async (c: Project) => {
  if (c.type) {
    const complete_path = createPath(c.name, c.project_path);
    createProjectFolder(complete_path, c.type);
  } else {
    shellMsg("O Tipo do projeto não foi selecionado. Por favor, selecione um!");
  }
};

export default start;
