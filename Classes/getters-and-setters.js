/*
let obj = {
    get propName() {
      getter, the code executed on getting obj.propName
    },
  
    set propName(value) {
      setter, the code executed on setting obj.propName = value
    }
};

*/

let user = {
    name: 'John',
    surname: 'Doe',
    // getter
    get fullName(){
        return `${this.name} ${this.surname}`
    },

    // setter
    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    }   
};

// console.log(user.fullName); // John Doe

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper