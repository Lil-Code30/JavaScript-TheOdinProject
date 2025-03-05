const Player = function(name, score){
    this.name = name ;
    this.score = score;
}

const playerOne = new Player('Player One', 35);
const playerTwo = new Player('Player Two', 30);

function startGame(){
    if (playerOne.score > 30){
        gameOver(playerOne);
    }else{
        gameOver(playerTwo);
    }
}

startGame()
function gameOver(winningpalyer){
    console.log('Congratulations!');
    console.log(`${winningpalyer.name} wins!`);
}


// prototype inheritance

/*
function Student(name, grade){
    this.name = name ;
    this.grade = grade ;
}

Student.prototype.sayName = function(){
    console.log(this.name);
}
Student.prototype.goToProm = function(){
    console.log("Ehh, I'm not going to prom");
}

const studentOne = new Student('John', 10);
const studentTwo = new Student('Jane', 9);

studentOne.sayName();
studentTwo.goToProm();
*/

function Student(){

}

Student.prototype.sayName = function(){
    console.log(this.name);
}

EightGrader.prototype = Object.create(Student.prototype);

function EightGrader(name){
    this.name = name;
    this.grade = 8;
}

const EightGrader1 = new EightGrader('John');
console.log(EightGrader1.grade);
EightGrader1.sayName();