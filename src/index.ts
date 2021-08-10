import path from "path";
import start from './app/worker'
import { Project } from "../types/project";

const config: Project = {
  name: "nome do projeto", //auto explicativo, o nome do projeto
  project_path: path.resolve(__dirname, "../", "../"), //Local da minha pasta de projetos projetos
  type: "BACKEND", //Aqui é onde se escolhe se vai querer um template vazio, backend ou frontend
};

start(config);
