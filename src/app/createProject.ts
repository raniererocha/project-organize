import { mkdir } from "fs/promises";
import createPath from "./createPath";
import { shellMsg } from "./shellComponents";

const createProject = (
  p: string,
  t: project_type,
  fn: (p: string, t: project_type) => void
) => {
  mkdir(createPath(p))
    .then(() => {
      fn(p, t);
    })
    .catch(({ message }) => {
      if (message.includes("EXIST")) {
        shellMsg("O projeto já existe!");
        fn(p, (t = "EMPTY"));
      } else {
        shellMsg(message);
      }
    });
};

export default createProject;
