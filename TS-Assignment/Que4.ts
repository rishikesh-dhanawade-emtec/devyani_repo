// write typescript code with following requirements (design proper classes). The requirements have
// suggestions for fields and methods, you are free to add more as per your thinking
// Bank Account
// fields: id, firstName, lastName, address, phone, email, type (saving/current)
// methods: createAccount, updateAccount, deleteAccount
// Transaction
// fields: date, type, amount, customerId
// methods: depositFunds, withdrawFunds

let arr:any = [];

class Transaction {
    private date: Date;
    private type: string = '';
    private amount: number = 0;
    private customerId: number = 0;

   constructor(date:Date, type:string, amount:number, customerId:number){
        this.date = date
        this.type = type
        this.amount = amount
        this.customerId = customerId
    }

   static createTransaction(date:Date, type:string, amount:number, customerId:number){
        let b = new Transaction(date, type, amount, customerId)
        arr.push(b)
    }

    static depositFunds(){
        const customerId = Number(prompt("Enter ID to deposit funds"))
        const index = arr.findIndex((item: any) => item.customerId == customerId)
        const amt = Number(prompt("Enter Amount to Deposit"))
        arr[index].amount += amt
        console.log(arr[index].amount)
        console.log(arr[index])
    }

   static withdrawFunds(){
        const customerId = Number(prompt("Enter ID to withdraw funds"))
        const index = arr.findIndex((item: any) => item.customerId == customerId)
        const amt = Number(prompt("Enter Amount to Withdraw"))
        arr[index].amount -= amt
        console.log(arr[index].amount)
        console.log(arr[index])
    }
}

const func2 = (date:Date, type:string, amount:number, customerId:number) => {
    Transaction.createTransaction(date, type, amount, customerId)
}

func2(new Date(),'savings',1000,1)
func2(new Date(),'current',5000,2)
func2(new Date(),'savings',10000,3)

console.log(arr)

Transaction.depositFunds()
Transaction.withdrawFunds()