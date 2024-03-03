// var x = 10;
// console.log(x)

// let y = 40;
// const pl = 3.14;

// let z = 15;

//1-	Create array that accept  number only 
let arrOnlyNum: number[];
arrOnlyNum = [12, 552, 13, 65, 79];
console.log(arrOnlyNum);
//2-	Create array that accept string and number only and print all items
let arrStringAndNum: (number | string)[]
arrStringAndNum = [23, 'second index arr', 27, '4th element']
console.log(arrStringAndNum);

//3-	Create a variable that accept number and Boolean only 
var NumberAndBoolean: boolean | string;
NumberAndBoolean = "Abdulrahman";
NumberAndBoolean = true;

// 4-	Create function with two parameter try to call it without any parameter “handling”
function twoParamFun(name:string = 'Abdulrahman', age:number = 20){
    name = name || 'No Name Exist';
    age = age || 20;

    return `Welcome ${name} you age is ${age}`
}
console.log("   >>>>")
console.log(twoParamFun())


// 5-	Create class Employee implement IEmployee using this object as implementation
//create interface
interface IEmployee {
    id:number,
    name:string,
    getUsername(): string,
    email:string,
    address:{street:string , suite:string , city:string , zipcode:string , geo:{lat:string , lng:string}}
}

// create class
class Employee implements IEmployee{
    private username: string;
    getUsername(): string {
        return this.username;
    }

    setUsername(username:string){
        this.username = username
    }

    constructor(public id:number , public name:string , public email:string ) {}

    public address: { street: string; suite: string; city: string; zipcode: string; geo: { lat: string; lng: string; }; };

}

// Implemnet the Object
const newEmp = new Employee(1, "Leanne Graham","Sincere@april.biz")
newEmp.address =  {"street": "Kulas Light","suite": "Apt. 556","city": "Gwenborough","zipcode": "92998-3874","geo": {"lat": "-37.3159","lng": "81.1496"}};

// 6-	Create class manager inherit from employee class and 
// Create a function to view employee address
class Manager extends Employee{
    constructor(public id:number , public name:string , public email:string ){
        super(id,name,email)
    }

    getEmpAddress(){
        return this.address;
    }
}

const manager = new Manager(2,"abdulrahman","abdulrahman Elsayem")
manager.address = {"street": "BNS","suite": "Apt. 556","city": "Gwenborough","zipcode": "92998-3874","geo": {"lat": "-37.3159","lng": "81.1496"}};
console.log(manager.getEmpAddress())
// 7-	Implement the following diagram 

interface IAccount{
    Date_of_opening:Date,
    addCustomer(),
    removeCustomer()
}

abstract class Account{
    Acc_no:number;
    Balance:number;

    deptiAmount(){
        console.log("Dept Card have been used")
    }
    creditAmount(){
        console.log("Credit Card has been Used")
    }

    getBalance(){
        return this.Balance;
    }
}

class Saving_Account extends Account implements IAccount{
    Min_Balance:number;
    Date_of_opening: Date;
    addCustomer() {
        throw new Error("addCustomer not Implmented")
    }

    removeCustomer() {
        throw new Error("removeCustomer not Implemented")

    }

}
class Current_Account extends Account implements IAccount{
    Interest_rate:number;
    Date_of_opening: Date;
    addCustomer() {
        throw new Error("addCustomer not Implemented")
    }

    removeCustomer() {
        throw new Error("removeCustomer not Implemented")

    }

}

const currentAccount = new Current_Account()
// currentAccount.addCustomer()
// currentAccount.removeCustomer()
const savaingAccount = new Saving_Account()
// savaingAccount.addCustomer()
// savaingAccount.removeCustomer()