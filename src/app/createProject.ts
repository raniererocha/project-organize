import { mkdir } from "fs/promises";
import cloneAndStartProject from "./cloneProject";
import { project_type } from "./worker";

const createProjectFolder = (path: string, type: project_type) => {
  mkdir(path)
    .then(() => {
      cloneAndStartProject(type, path);
    })
    .catch(({ message }) => {
      if (message.includes("EXIST")) {
        console.log("Vou só abrir o vscode pra tu, moral!");
      } else {
        console.log(message);
      }
    });
};

export default createProjectFolder;
