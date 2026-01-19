import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';
import { BonusAccount } from './class/BonusAccount';

// Instância PeopleAccount
const people = new PeopleAccount(1, 'Nath', 10, 465.6);
console.log(`Saldo inicial PeopleAccount: R$${people.getBalance()}`);
people.deposit(65);
console.log(`Saldo após depósito: R$${people.getBalance()}`);
people.withDraw(100);
console.log(`Saldo após saque: R$${people.getBalance()}`);

// Instância CompanyAccount 
const company = new CompanyAccount('Dio', 52, 80.8);
console.log(`\nSaldo inicial CompanyAccount: R$${company.getBalance()}`);
company.getLoan(85); // faz empréstimo
console.log(`Saldo após empréstimo: R$${company.getBalance()}`);

// Instância BonusAccount 
const bonus = new BonusAccount('Lucas', 101, 200);
console.log(`\nSaldo inicial BonusAccount: R$${bonus.getBalance()}`);
bonus.deposit(100); // vai depositar +10 automaticamente
console.log(`Saldo após depósito com bônus: R$${bonus.getBalance()}`);
