## Range com Multiplos Valores - Vitor Figueredo - Angular

Este respositório é parte do desafio criado pela equipe da TOTVS HTML Framework para a vaga de desenvolvedor front-end. 

A solução apresentada é um range com dois valores que permite setting de valor de início, fim, preset de valores para os dois ranges, step e possibilidade de desativação do range. 

O projeto também realiza a implementação deste range de duas formas diferentes. 

- Consultando um objeto criado pelo próprio component para simular a resposta de uma API. 
- Realiza um fetch para um API real (https://jsonplaceholder.typicode.com/), utilizando a nova sintaxe async/await, aprensentada no ES8, para apresentar posts dentro de um range de IDs definidos pelo usuário.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Settings

Run `npm install` inside './angular-range' to install the requirements for this project. This might take a while, don't worry.

## Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Esta aplicação está executando a maioria dos testes criados pela utilização do Angular CLI. Entretanto, como parte do desafio, foram criados os seguintes testes:

- `src/app/angular-slider/angular-slider.component.spec.ts` tests `init should be greater than, or equal to minimum`;
- `src/app/angular-slider/angular-slider.component.spec.ts` tests `end should be less than, or equal to maximum`;
- `src/app/angular-slider/angular-slider.component.spec.ts` tests `step should NOT be less than zero`;
- `src/app/angular-slider/angular-slider.component.spec.ts` tests `step should NOT be equals than zero`;
- `src/app/angular-slider/angular-slider.component.spec.ts` tests `step should NOT be greater than maximum`;
- `src/app/angular-slider/angular-slider.component.spec.ts` tests `disables should be false by default`;
- `src/app/angular-slider/angular-slider.component.spec.ts` tests `init should NOT be greater than maximum`;
- `src/app/angular-slider/angular-slider.component.spec.ts` tests `minimum should NOT be less than maximum`;
