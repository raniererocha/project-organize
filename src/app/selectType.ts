import { useShell } from "./shellComponents";

export const selectType = (p: string, t: project_type) => {
  switch (t) {
    case "BACKEND":
      useShell(p, t)
      break;
    case "FRONTEND":
      useShell(p, t)
      break;
    case "EMPTY":
      useShell(p, t)
      break;
    default:
      break;
  }
};

export default selectType;
