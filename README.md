# Project Organizer :open_file_folder:

------

### Demonstração

![](https://i.imgur.com/nTUpnub.gif)

------

### Por que usar?

Pra pequenos projetos te poupa o tempo de configurar tudo do zero, basta dar o nome do projeto e ele já faz tudo pra você, ai você só gasta tempo com o que importa de verdade, o código!

------

### Como Usar?

Basta clonar o repositório, rodar `npm install` ou `yarn install` para baixar as dependências. Configurar o config que fica no `src/index.ts` e por ultimo é só rodar `npm run dev` ou `yarn dev`

------

### Personalizando o config

*Devido ao uso do Typescript a configuração fica muito simples, mas irei explicar melhor o que cada coisa faz e o porque de cada escolha.*

- **name - string:** É básicamente o nome do projeto e esse também será o nome da pasta criada. Não se preocupe com espaços, ele limpará os espaços e caracteres antes de criar a pasta. Caso o projeto já exista na sua pasta de projetos ele apenas abrirá o vscode pra você.

- **project_path - string:** Aqui será colocado o caminho pra sua pasta de projetos. Sinta-se livre pra mudar o local pra o que lhe agrade  

- **type - "FRONTEND" | "BACKEND" | "EMPTY":**  O type é a configuração que dita qual template será buscado. (Até o presente momento só foi implementado o backend (nodejs, express, typescript))

### Extra

Sinta-se livre pra mudar o que quiser! A ideia é te ajudar a focar só no que importa. Mude os repositórios, implemente uma interface visual. Seja livre! :D
