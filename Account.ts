export class Account {
    
    id: number;
    name: string;
    surname: string;
    budget: number;

    constructor(id: number, name: string, surname: string, budget: number) {
        
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.budget = budget;
    }

    sendMoney(howMany: number, otherAccount:Account) {
        
        this.budget -= howMany;
        otherAccount.budget += howMany;
    }
}