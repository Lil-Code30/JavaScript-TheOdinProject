/*
Write a recursive function that given an input n sums all nonnegative integers up to n
*/

function sum(n) {
  if (n === 0) {
    return 0;
  } else {
    return sum(n - 1) + n;
  }
}

console.log(`The sum of nth numbers is ${sum(10)}`);
