import createProject from "./createProject";
import selectType from "./selectType";

export const worker = {
  init(name: string, type: project_type) {
    createProject(name, type, selectType);
  },
};
