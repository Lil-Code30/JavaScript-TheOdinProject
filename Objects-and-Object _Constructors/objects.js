'use strict';

// creating a student object

const student = {
    name: 'John',
    age: 30,
    greeting: function(){
        console.log('Hello World');
    }
}

// creating a Book obj with a contructor 
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; // true or false
    this.info = function(){
        return `
            ${this.title} by ${this.author}, ${ this.pages} pages, ${read ? 'read' : 'not read yet'},
        `;
    }
}

const thehoobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(thehoobbit.info());

/* function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}   */

  function Person(name){
    this.name = name;
  }
  function Student(name){
    this.name = name;
  }

  Person.prototype.sayName = function(){
    return `I'm ${this.name}`;
  }

  Object.setPrototypeOf(Student.prototype, Person.prototype);

const person1 = new Person('john');
const student1 = new Person('Doe');
console.log(person1.sayName());
console.log(student1.sayName());