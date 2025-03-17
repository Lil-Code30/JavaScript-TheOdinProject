/*
class MyClass {
    // class methods
    constructor() { ... }
    method1() { ... }
    method2() { ... }
    method3() { ... }
    ...
}
*/
// NOTE : The notation here is not to be confused with object literals. Within the class, no commas are required.

// note Link : https://javascript.info/class
class User{
    constructor(name){
        this._name = name;
    }

    sayHi(){
        alert(`Hello, ${this.name}`);
    }
    // Getters/setters

    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            alert("Name is too short!");
            return;
        }
        this._name = value;
    }
}


// Usage
let user1 = new User('John');
// user1.sayHi();
alert(user1.name);
user1.name = 'Pete'; // will trigger the setter

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
  
// Creating an object (instance) of the class
const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.

// Class Inheritance
class Student extends Person{
    constructor(name, age, grade){
        super(name, age); // Calls the parent class constructor
        this.grade = grade;
    }

    // Override the parent class method
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am in grade ${this.grade}.`);
    }
}

const student1 = new Student('Peter', 15, "10th");
student1.greet(); // Output: Hello, my name is Peter and I are 15 years old. I am in grade 10th



