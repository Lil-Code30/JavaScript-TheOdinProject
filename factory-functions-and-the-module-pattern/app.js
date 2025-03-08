let globalAge = 23; // This is a global variable

// This is a function - and hey, a curly brace indicating a block
function printAge (age) {
  var varAge = 34; // This is a function scoped variable

  // This is yet another curly brace, and thus a block
  if (age > 0) {
    // This is a block-scoped variable that exists
    // within its nearest enclosing block, the if's block
    const constAge = age * 2;
    console.log(constAge);
  }

  // ERROR! We tried to access a block scoped variable
  // not within its scope
  // console.log(constAge);
}

printAge(globalAge);

// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
// console.log(varAge);


// Closures aren’t scary
// A closure is a function that has access to its own scope, the scope of its parent function
// and the global scope.

function makeAdding(firstNumber){
    //"first" is scoped within the makeAdding function
    const first = firstNumber;
    return function resulting(secondNumber){
        // "second" is scoped within the resulting function
        const second = secondNumber;
        return first + second;
    }
}

// We can use the closure like this
const addFive = makeAdding(5);
console.log(addFive(10)); // Outputs: 15


// Factory functions 🏭
// A factory function is a function that returns a new object.
// It's like a constructor function, but without the "new" keyword.

// const User = function(name){
//     this.name = name;
//     this.discordName = "@" + name;
// }
// // this is a constructor - then this can be refactored into a fctory

// function createUser(name){
//     const discordName = "@" + name;
//     return {name, discordName};
// }

// const user = createUser('Loko');
// console.log(user);

// shortcut to create an object
const name = 'Loko';
const age = 30;
const color = 'blue';

const userObject = {name, age, color};

console.log(userObject);
console.log( 'This is my name: '+ userObject.name);

// destructuring

let a, b ,rest;

[a, b] = [1, 2];

console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];

console.log(rest);