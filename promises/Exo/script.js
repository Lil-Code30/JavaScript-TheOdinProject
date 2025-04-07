/*
// Delayed call back function
function displayConsole(callback) {
  setTimeout(callback, 2000);
}
function displayMessage() {
  const message = "Hello World";
  console.log(message);
}

displayConsole(displayMessage);

console.log("Waiting...");
*/

// callback to promises conversion
const enterPassword = document.getElementById("password");
const loginBtn = document.getElementById("login");

async function displayPromise() {
  const userName = "John";
  const password = "1234";
  //   const enterPassword = document.getElementById("password").value.trim();

  console.log(enterPassword.value);

  return new Promise((resolve, reject) => {
    if (enterPassword.value) {
      if (enterPassword.value === password) {
        resolve("Message: Hello " + userName);
      } else {
        reject("Message: Invalid password");
      }
    } else {
      reject("Message: No Password Entered");
    }
  });
}

loginBtn.addEventListener("click", () => {
  displayPromise()
    .then((message) => {
      alert(message);
    })
    .catch((message) => {
      alert(message);
    });
});

// function conversionToPromise(callback)
