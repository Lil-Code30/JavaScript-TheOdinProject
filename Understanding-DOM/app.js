const container = document.querySelector('#container');

//creating elements
const redP = document.createElement('p');
const blueH3 = document.createElement('h3');
const box = document.createElement('div');
const boxH1 = document.createElement('h1');
const boxP = document.createElement('p');

//adding contents to the elements created
redP.textContent = 'I am red';
blueH3.textContent = 'I am blue h3!';
boxH1.textContent = 'I am in a div';
boxP.textContent = 'ME TOO!';

// appending elements to the box
box.append(boxH1, boxP);

// styling the elements
redP.style.color = 'red';
blueH3.style.color = 'blue';

box.setAttribute('style', 'border: 1px solid black; background-color: pink;');

//appending elements to the container
container.append(redP, blueH3, box);

//Method 1
function alertFunction(){
    alert('YAY! YOU DID IT!');
}
  
// Method 2
const btn = document.querySelector("#btn");
btn.onclick = alertFunction;
  
const btn3 = document.querySelector(".btn");

// Method 3
btn3.addEventListener("click", function (e){
    console.log(e.target);
    e.target.style.background = 'blue';
});

//random number between 0 and 255
function getRandomNumber(){
    return Math.floor(Math.random() * 256);
}

// function to change the body background color
function bgChange(){

    const body = document.querySelector('body');
    
    const randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;

    body.style.backgroundColor = randomColor;
}

const changeBtn = document.querySelector('.changeBtn');
changeBtn.addEventListener('click', bgChange);