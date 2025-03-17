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