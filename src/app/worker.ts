import shell from "shelljs";
import { mkdir } from "fs/promises";

export interface iProject {
  name: string;
  project_path: string;
  type: "BACKEND" | "FRONTEND" | "EMPTY";
}

const start = async (c: iProject) => {
  let clean_name = c.name.replace(/ /g, "-").replace(/\^!@#\$%\*\/\+=.,;/g, "");
  let complete_path = `${c.project_path}/${clean_name}`;

  mkdir(complete_path)
    .then(() => {
      if (c.type === "BACKEND") {
        shell.exec(
          `cd ${complete_path} && git clone -q https://github.com/raniererocha/default-project-be . && npm install`
        );
        shell.exec(`cd ${complete_path} && code .`);
      } else if (c.type === "FRONTEND") {
        console.log("Clonando o repo frontend");
      } else {
        console.log("Ok, só vou abrir o vscode pra você!");
      }
    })
    .catch(({ message }) => {
      if (message.includes("EEXIST")) {
        console.log("Vou só abrir o vscode pra tu, moral!");
      } else {
        console.log(message);
      }
    });
};

export default start;
