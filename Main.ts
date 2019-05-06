import { Account } from './Account';

let giuseppe = new Account(1, "Giuseppe", "Privitera", 1000);
console.log(giuseppe);

let andrea = new Account(2, "Andrea", "Ardenti", 500);
console.log(andrea);

giuseppe.sendMoney(300, andrea);
console.log(giuseppe);
console.log(andrea);