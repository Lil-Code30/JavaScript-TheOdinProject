/*
write a recursive function collatz(n) that calculates how many steps it takes to get to 1 if you start from n and recurse 

conditions:
    if n is 1, return 0
    if n is even, return collatz(n/2)
    if n is odd, return collatz(3*n + 1)
*/

// let steps = 0;

// function collatz(n) {
//   if (n === 1) {
//     return steps;
//   } else if (n % 2 === 0) {
//     steps++;
//     return collatz(n / 2);
//   } else if (n % 2 !== 0) {
//     steps++;
//     return collatz(3 * n + 1);
//   }
// }

// collatz(27);
// console.log(`The number of steps is: ${steps}`);

function collatz(n) {
  if (n === 1) {
    return 0;
  } else if (n % 2 === 0) {
    return 1 + collatz(n / 2);
  } else {
    return 1 + collatz(3 * n + 1);
  }
}

console.log(`The number of steps is: ${collatz(3)}`);
