import shell from "shelljs";

export const shellMsg = (msg: string) => {
  shell.echo(msg);
};

export const useShell = (path: string, repo?: string, text?: string) => {
  text ? shell.echo(text) : "";
  shell.exec(`cd ${path} && ${repo} && npm install`, {
    silent: true,
  });
  shell.echo("Abrindo o Visual Studio Code!");
  shell.exec(`cd ${path} && code .`);
};
