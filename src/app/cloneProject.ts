import shell from "shelljs";
import { project_type } from "./worker";

const useShell = async (path: string, repo?: string, text?: string) => {
  text ? shell.echo(text) : "";
  shell.exec(`cd ${path} && ${repo} && npm install`, {
    silent: true,
  });
  shell.echo("Abrindo o Visual Studio Code!");
  shell.exec(`cd ${path} && code .`);
};

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
