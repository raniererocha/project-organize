import { useShell } from "./shellComponents";
import { project_type } from "./worker";

export const cloneAndStartProject = (type: project_type, path: string) => {
  switch (type) {
    case "BACKEND":
      useShell(
        path,
        "git clone https://github.com/raniererocha/default-project-be .",
        "Criando o backend, aguarte um instante"
      );
      break;
    case "FRONTEND":
      useShell(path, "", "Aguarde, criando o frontend!");
      break;
    case "EMPTY":
      useShell(path, "", "Criando um projeto vazio.");
      break;
    default:
      break;
  }
};

export default cloneAndStartProject;
