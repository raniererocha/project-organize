import { resolve } from "path";

export const config = {
  "projects-path": resolve(__dirname, ".."),
  repositories: [
    {
      name: "BACKEND",
      url: "https://github.com/raniererocha/default-project-be.git",
    },
    {
      name: "FRONTEND",
      url: "",
    },
    {
      name: "EMPTY",
      url: "",
    },
  ],
};
