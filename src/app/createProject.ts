import { mkdir } from "fs/promises";
import cloneAndStartProject from "./cloneProject";
import { shellMsg, useShell } from "./shellComponents";
import { project_type } from "../../types/project";

const createProjectFolder = (path: string, type: project_type) => {
  mkdir(path)
    .then(() => {
      cloneAndStartProject(type, path);
    })
    .catch(({ message }) => {
      if (message.includes("EXIST")) {
        useShell(path, "", "Projeto já existe");
      } else {
        shellMsg(message);
      }
    });
};

export default createProjectFolder;
