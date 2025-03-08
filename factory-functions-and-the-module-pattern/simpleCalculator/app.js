const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');



const output = document.querySelector('.output');

//calculator function

const calculator = (function (){
    const add = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;
    const multiply = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => num1 / num2;

    return {add, subtract, multiply, divide};
})();

// function to handle the numbers
function handleNumbers() {
    const num1 = Number(document.querySelector('.num1').value);
    const num2 = Number(document.querySelector('.num2').value);

    if(num1 == '' || isNaN(num1) || num2 == '' || isNaN(num2)){
        alert('Please enter a number');
        return;
    }else{
        return {num1, num2};
    }
}

// add
add.addEventListener('click', () => {
    const {num1, num2} = handleNumbers();
    const result = calculator.add(num1, num2);
    console.log(result);
    output.textContent = result;
});

// subtract
subtract.addEventListener('click', () => {
    const {num1, num2} = handleNumbers();
    const result = calculator.subtract(num1, num2);
    console.log(result);
    output.textContent = result;
});

// multiply
multiply.addEventListener('click', () => {
    const {num1, num2} = handleNumbers();
    const result = calculator.multiply(num1, num2);
    console.log(result);
    output.textContent = result;
});

// divide
divide.addEventListener('click', () => {
    const {num1, num2} = handleNumbers();

    if(num2 === 0){
        alert('Cannot divide by zero');
        return;
    }
    const result = calculator.divide(num1, num2);
    console.log(result);
    output.textContent = result;
});