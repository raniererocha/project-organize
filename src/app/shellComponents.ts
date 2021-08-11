import { echo, exec } from "shelljs";
import { config } from "../../config";
import createPath from "./createPath";

export const shellMsg = (msg: string) => {
  echo(msg);
};

export const useShell = (p: string, t: project_type) => {
  const path = createPath(p);
  const cd = `cd ${path} &&`;
  const code = `code .`;
  config.repositories.map((repo) => {
    if (repo.name === t) {
      //echo(`Criando um projeto do tipo ${repo.name}`);

      if (repo.url !== "") {
        echo(`Criando um projeto do tipo ${repo.name}`);
        echo("Baixando os arquivos do repositório...")
        exec(`${cd} git clone -q ${repo.url} .`);
        echo("Instalando as dependencias...");
        exec(`${cd} npm install`);
        echo("Abrindo o Visual Studio Code...");
        exec(`${cd} ${code}`);
      } else {
        echo("Abrindo o Visual Studio Code...");
        exec(`${cd} ${code}`);
      }

      /*
      if (repo.name === "FRONTEND") {
        exec(`${cd} npx create-react-app ./`);
        echo("Abrindo o Visual Studio Code...");
        exec(`${cd} ${code}`);
      } if (repo.name === "BACKEND") {
        exec(`${cd} git clone . -q ${repo.url}`);
        echo("Instalando as dependencias...");
        exec(`${cd} npm install`);
        echo("Abrindo o Visual Studio Code...");
        exec(`${cd} ${code}`);
      } else {
        echo("Abrindo o Visual Studio Code...");
        exec(`${cd} ${code}`);
      } */
    } /*else {
      echo("O tipo de projeto não foi configurado");
    }*/
  });
};
