# typescipt-bank-app


# Dio Bank System

Sistema bancário em TypeScript utilizando conceitos de Programação Orientada a Objetos (POO).

## Tecnologias

- TypeScript
- Node.js

## Estrutura do projeto

dio-bank-system/
├─ class/                # Todas as classes
│   ├─ DioAccount.ts
│   ├─ PeopleAccount.ts
│   ├─ CompanyAccount.ts
│   └─ BonusAccount.ts
├─ app.ts                # Arquivo principal com instâncias e testes
├─ tsconfig.json         # Config TypeScript
├─ package.json          # Info do projeto
└─ README.md             # Descrição do projeto

## Funcionalidades

- Depósito e saque com validação de status e saldo
- Empréstimo para contas corporativas
- Bônus em depósitos para contas especiais
- Atributos privados e somente leitura para accountNumber e name

## Como rodar

1. Instale dependências (Node + TypeScript)
2. Execute: `ts-node app.ts`

