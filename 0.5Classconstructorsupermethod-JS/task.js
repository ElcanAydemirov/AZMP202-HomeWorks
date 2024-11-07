class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

const myRectangle = new Rectangle(5, 10);

console.log("Area of the rectangle:", myRectangle.calculateArea()); // 50
console.log("Perimeter of the rectangle:", myRectangle.calculatePerimeter()); // 30

class BankAccount {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("Error: Elave edilecek mebleg musbet olmalidir Musbet Olmalidir");
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (this.balance >= amount) {
                this.balance -= amount;
            } else {
                console.log("Error: kifayet qeder vesait yoxdur");
            }
        } else {
            console.log("Error: cixarilacaq mebleg musbet olmalidir");
        }
    }
}

const account1 = new BankAccount('101', 1000); 
const account2 = new BankAccount('102', 500);  

account1.deposit(500);  
account1.withdraw(200); 

account2.withdraw(100); 
account2.deposit(700);  

console.log("Balance of account 101 (Alice):", account1.balance); 
console.log("Balance of account 102 (Bob):", account2.balance);    