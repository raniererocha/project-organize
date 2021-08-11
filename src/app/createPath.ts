import { config } from "../../config";

const createPath = (p: string): string => {
  let clean_name = p.replace(/ /g, "-").replace(/\^!@#\$%\*\/\+=.,;/g, "");
  let path = `${config["projects-path"]}/${clean_name}`;
  return path;
};

export default createPath;
