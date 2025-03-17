// Ex1  Person Class with Details
/*  
Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.
*/

class Person{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
}

const person1 = new Person('Ismael', 23, 'Cameroon');
const person2 = new Person('John', 30, 'United States');

person1.displayDetails();
person2.displayDetails();

console.log("_____ End of Ex1 _____");

// Ex2 Rectangle Class with Area and Perimeter
/* 
Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.
*/

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    calculateArea(){
        return this.width * this.height;
    }

    calculatePerimeter(){
        return 2 * (this.width + this.height);
    }
}

const rectangle1 = new Rectangle(5, 3);
const area = rectangle1.calculateArea();
const perimeter = rectangle1.calculatePerimeter();

console.log(`Rectangle with width: ${rectangle1.width} and height: ${rectangle1.height} has an Area: ${area} and Perimeter: ${perimeter}`);

console.log("_____ End of Ex2 _____");

// Ex3 Vehicle and Car Classes with Inheritance
/*
Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors.Override the display method to include the number of doors. 
*/ 

class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

class Car extends Vehicle{
    constructor(make, model, year, numDoors){
        super(make, model, year);
        this.numDoors = numDoors;
    }

    displayDetails(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Number of Doors: ${this.numDoors}`);
    }
}
// create vehicle object
const myVehicle = new Vehicle('Toyota', 'Camry', 2015);
myVehicle.displayDetails();

// Create a new Car object
const myCar = new Car('Toyota', 'Camry', 2015, 4);
myCar.displayDetails();

console.log("_____ End of Ex3 _____");

// Ex4 BankAccount Class with Deposit and Withdrawal
/*
Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.
*/ 

class BankAccount{
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
    }

    withdraw(amount){
        if(amount > this.balance){
            console.log(`Insufficient funds in account ${this.accountNumber}. Withdrawal of ${amount} is not possible.`);
        }else{
            this.balance -= amount;
            console.log(`Withdrew ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
        }
    }
}

const account1 = new BankAccount(123456, 1000);
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(1500);

console.log("_____ End of Ex4 _____");

// Ex5 Shape, Circle, and Triangle Classes with Area Calculation
/*
    Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.
*/
class Shape{
    calculateArea(){
        throw new Error('Method calculateArea() must be implemented.');
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    calculateArea(){
        return Math.PI * this.radius * this.radius;
    }
}

class Triangle extends Shape{
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea(){
        return 0.5 * this.base * this.height;
    }

}

const circle = new Circle(5);
const triangle = new Triangle(3, 4);

console.log(`Circle area: ${circle.calculateArea()}`);
console.log(`Triangle area: ${triangle.calculateArea()}`);

console.log("_____ End of Ex5 _____");