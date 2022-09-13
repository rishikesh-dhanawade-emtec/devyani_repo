"use strict";
// write typescript code with following requirements (design proper classes). The requirements have suggestions for fields and methods, you are free to add more as per your thinking
// Bank Account
// fields: id, firstName, lastName, address, phone, email, type (saving/current)
// methods: createAccount, updateAccount, deleteAccount
// Transaction
// fields: date, type, amount, customerId
// methods: depositFunds, withdrawFunds
let accounts = [];
class BankAccount {
    constructor(id, firstName, lastName, address, phone, email, type) {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.address = '';
        this.phone = '';
        this.email = '';
        this.type = '';
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.type = type;
    }
    static createAccount(id, firstName, lastName, address, phone, email, type) {
        let b = new BankAccount(id, firstName, lastName, address, phone, email, type);
        accounts.push(b);
    }
    static updateAccount() {
        const id = prompt("Enter ID to update");
        const index = accounts.findIndex((item) => item.id == id);
        let bool = true;
        while (bool) {
            const i = Number(prompt('Which data do you want to update: \n 1: First Name \n 2: Last Name \n 3: Address \n 4: Phone \n 5: Email \n 6: Account Type: [Savings/Current] \n 7: exit'));
            switch (i) {
                case 1:
                    const fname = prompt('Enter your updated first name');
                    accounts[index].firstName = fname;
                    break;
                case 2:
                    const lname = prompt('Enter your updated last name');
                    accounts[index].lastName = lname;
                    break;
                case 3:
                    const address = prompt('Enter your updated address');
                    accounts[index].address = address;
                    break;
                case 4:
                    const phone = prompt('Enter your updated phone number');
                    accounts[index].phone = phone;
                    break;
                case 5:
                    const email = prompt('Enter your updated email');
                    accounts[index].email = email;
                    break;
                case 6:
                    const type = prompt('Enter updated account type');
                    accounts[index].type = type;
                    break;
                case 7:
                    bool = false;
            }
        }
        console.log(accounts[index]);
    }
    static deleteAccount() {
        const id = prompt("Enter ID to delete");
        const index = accounts.findIndex((item) => item.id == id);
        const flag = confirm('Do you want to delete your account?');
        if (flag) {
            accounts.splice(index, 1);
            console.log(flag);
        }
    }
}
const func = (id, firstName, lastName, address, phone, email, type) => {
    BankAccount.createAccount(id, firstName, lastName, address, phone, email, type);
};
func(1, 'abc', 'abc', 'pune', '8578918292', 'test@gmail.com', 'savings');
func(2, 'xyz', 'xyz', 'pune', '4949846547', 'test@gmail.com', 'current');
func(3, 'pqr', 'pqr', 'pune', '8578918290', 'test@gmail.com', 'savings');
BankAccount.deleteAccount();
BankAccount.updateAccount();
console.log(accounts);
let arr = [];
class Transaction {
    constructor(date, type, amount, customerId) {
        this.type = '';
        this.amount = 0;
        this.customerId = 0;
        this.date = date;
        this.type = type;
        this.amount = amount;
        this.customerId = customerId;
    }
    static createTransaction(date, type, amount, customerId) {
        let b = new Transaction(date, type, amount, customerId);
        arr.push(b);
    }
    static depositFunds() {
        const customerId = Number(prompt("Enter ID to deposit funds"));
        const index = arr.findIndex((item) => item.customerId == customerId);
        const amt = Number(prompt("Enter Amount to Deposit"));
        arr[index].amount += amt;
        console.log(arr[index].amount);
        console.log(arr[index]);
    }
    static withdrawFunds() {
        const customerId = Number(prompt("Enter ID to withdraw funds"));
        const index = arr.findIndex((item) => item.customerId == customerId);
        const amt = Number(prompt("Enter Amount to Withdraw"));
        arr[index].amount -= amt;
        console.log(arr[index].amount);
        console.log(arr[index]);
    }
}
const func2 = (date, type, amount, customerId) => {
    Transaction.createTransaction(date, type, amount, customerId);
};
func2(new Date(), 'savings', 1000, 1);
func2(new Date(), 'current', 5000, 2);
func2(new Date(), 'savings', 10000, 3);
console.log(arr);
Transaction.depositFunds();
Transaction.withdrawFunds();
