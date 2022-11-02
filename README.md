## ProjectCRUD C/ Firebase

# Comandos executados durante o projeto
--> npm i bootswatch bootstrap jquery @popperjs/core

# Configurando styles, copiar linhas no arquivos styles.scss - trocar [theme] pelo tema escolhido no caso estamso usando [united]
@import "~bootswatch/dist/[theme]/variables";
@import "~bootstrap/scss/bootstrap";
@import "~bootswatch/dist/[theme]/bootswatch";

deverá ficar assim:
@import "~bootswatch/dist/united/variables";
@import "~bootstrap/scss/bootstrap";
@import "~bootswatch/dist/united/bootswatch";

# configurando arquivo angular.json
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/@popperjs/core/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]

## FIREBASE

Criar projeto no site, depois do projeto criado executar as linhas de comando dentro da pasta do projeto

# npm install firebase
# firebase login 
"O mesmo fará uma validação no site com o login utilizando o email de cadastro ou email de autorização"
# firebase init
# ng add @angular/fire
"neste ultimo comando devemos escolher o projeto criado no site."



















# #############################################################################################
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
