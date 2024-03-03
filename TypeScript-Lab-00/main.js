// var x = 10;
// console.log(x)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let y = 40;
// const pl = 3.14;
// let z = 15;
//1-	Create array that accept  number only 
var arrOnlyNum;
arrOnlyNum = [12, 552, 13, 65, 79];
console.log(arrOnlyNum);
//2-	Create array that accept string and number only and print all items
var arrStringAndNum;
arrStringAndNum = [23, 'second index arr', 27, '4th element'];
console.log(arrStringAndNum);
//3-	Create a variable that accept number and Boolean only 
var NumberAndBoolean;
NumberAndBoolean = "Abdulrahman";
NumberAndBoolean = true;
// 4-	Create function with two parameter try to call it without any parameter “handling”
function twoParamFun(name, age) {
    if (name === void 0) { name = 'Abdulrahman'; }
    if (age === void 0) { age = 20; }
    name = name || 'No Name Exist';
    age = age || 20;
    return "Welcome ".concat(name, " you age is ").concat(age);
}
console.log("   >>>>");
console.log(twoParamFun());
// create class
var Employee = /** @class */ (function () {
    function Employee(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    Employee.prototype.getUsername = function () {
        return this.username;
    };
    Employee.prototype.setUsername = function (username) {
        this.username = username;
    };
    return Employee;
}());
// Implemnet the Object
var newEmp = new Employee(1, "Leanne Graham", "Sincere@april.biz");
newEmp.address = { "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": { "lat": "-37.3159", "lng": "81.1496" } };
// 6-	Create class manager inherit from employee class and 
// Create a function to view employee address
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, email) {
        var _this = _super.call(this, id, name, email) || this;
        _this.id = id;
        _this.name = name;
        _this.email = email;
        return _this;
    }
    Manager.prototype.getEmpAddress = function () {
        return this.address;
    };
    return Manager;
}(Employee));
var manager = new Manager(2, "abdulrahman", "abdulrahman Elsayem");
manager.address = { "street": "BNS", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": { "lat": "-37.3159", "lng": "81.1496" } };
console.log(manager.getEmpAddress());
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.deptiAmount = function () {
        console.log("Dept Card have been used");
    };
    Account.prototype.creditAmount = function () {
        console.log("Credit Card has been Used");
    };
    Account.prototype.getBalance = function () {
        return this.Balance;
    };
    return Account;
}());
var Saving_Account = /** @class */ (function (_super) {
    __extends(Saving_Account, _super);
    function Saving_Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Saving_Account.prototype.addCustomer = function () {
        throw new Error("addCustomer not Implmented");
    };
    Saving_Account.prototype.removeCustomer = function () {
        throw new Error("removeCustomer not Implemented");
    };
    return Saving_Account;
}(Account));
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Current_Account.prototype.addCustomer = function () {
        throw new Error("addCustomer not Implemented");
    };
    Current_Account.prototype.removeCustomer = function () {
        throw new Error("removeCustomer not Implemented");
    };
    return Current_Account;
}(Account));
var currentAccount = new Current_Account();
// currentAccount.addCustomer()
// currentAccount.removeCustomer()
var savaingAccount = new Saving_Account();
// savaingAccount.addCustomer()
// savaingAccount.removeCustomer()
