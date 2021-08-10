import path from "path";
import start, { iProject } from "./app/worker";

const config: iProject = {
  name: "backend legal do mmte",
  project_path: path.resolve(__dirname, "../", "../"),
  type: "BACKEND",
};

start(config);
