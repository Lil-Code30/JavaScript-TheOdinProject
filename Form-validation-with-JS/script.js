// collecting the form elements

const form = document.querySelector("form");
const gender = document.querySelectorAll('input[name="gender"]');
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const country = document.querySelector("#country");
const fieldSet = document.querySelector("fieldset");

const genderErrorBox = document.querySelector("#gender-msgBox");
const firstNameErrorBox = document.querySelector("#firstName-msgBox");
const lastNameErrorBox = document.querySelector("#lastName-msgBox");
const emailErrorBox = document.querySelector("#email-msgBox");
const phoneErrorBox = document.querySelector("#phone-msgBox");
const errorBox = document.querySelector(".error-msg");

// adding event listeners to elment inputs
// gender input
for (let i = 0; i < gender.length; i++) {
  gender[i].addEventListener("input", () => {
    if (gender[i].checked) {
      genderErrorBox.classList.remove("display");
      fieldSet.classList.remove("error");
      fieldSet.classList.add("success");
    } else {
      genderErrorBox.msgBox.textContent = "Veuillez choisir votre genre.";
      genderErrorBox.classList.add("display");
      fieldSet.classList.remove("success");
      fieldSet.classList.add("error");
    }
  });
}

// first name input
firstName.addEventListener("input", (e) => {
  if (firstName.validity.valid) {
    firstNameErrorBox.classList.remove("display");
    firstName.classList.remove("error");
    firstName.classList.add("success");
  } else {
    isInValidFirstName();
  }
});

// last name input
lastName.addEventListener("input", (e) => {
  if (lastName.validity.valid) {
    lastNameErrorBox.classList.remove("display");
    lastName.classList.remove("error");
    lastName.classList.add("success");
  } else {
    isInValidLastName();
  }
});

// email input
email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailErrorBox.classList.remove("display");
    email.classList.remove("error");
    email.classList.add("success");
  } else {
    isInValidEmail();
  }
});

// phone input
phone.addEventListener("input", (e) => {
  if (phone.validity.valid) {
    phoneErrorBox.classList.remove("display");
    phone.classList.remove("error");
    phone.classList.add("success");
  } else {
    inInvalidPhone();
  }
});

// verification before submit
form.addEventListener("submit", (e) => {
  if (!gender[0].checked || !gender[1].checked) {
    genderErrorBox.textContent = "Veuillez choisir votre genre.";
    genderErrorBox.classList.add("display");
    fieldSet.classList.add("error");
    e.preventDefault();
  } else if (!firstName.validity.valid) {
    isInValidFirstName();
    e.preventDefault();
  } else if (!lastName.validity.valid) {
    isInValidLastName();
    e.preventDefault();
  } else if (!email.validity.valid) {
    isInValidEmail();
    e.preventDefault();
  } else if (!phone.validity.valid) {
    inInvalidPhone();
    e.preventDefault();
  }
});

// function to check if the first name is invalid
function isInValidFirstName() {
  if (firstName.validity.valueMissing) {
    firstNameErrorBox.textContent = "Veuillez entrer votre prrenom.";
    firstNameErrorBox.classList.add("display");
    firstName.classList.add("error");
    firstName.classList.remove("success");
  }
}

// function to check if the last name is invalid
function isInValidLastName() {
  if (lastName.validity.valueMissing) {
    lastNameErrorBox.textContent = "Veuillez entrer votre nom.";
    lastNameErrorBox.classList.add("display");
    lastName.classList.add("error");
    lastName.classList.remove("success");
  }
}

// function to verify the email address
function isInValidEmail() {
  if (email.validity.valueMissing) {
    emailErrorBox.textContent = "Veuillez entrer une adresse email.";
    emailErrorBox.classList.add("display");
    email.classList.add("error");
    email.classList.remove("success");
  } else if (email.validity.typeMismatch) {
    emailErrorBox.textContent = "Veuillez entrer une adresse email valide.";
    emailErrorBox.classList.add("display");
    email.classList.add("error");
    email.classList.remove("success");
  }
}

// function to verify the phone number
// // regex is +5(555)555-5555 ^\+\d\(\d{3}\)\d{3}-\d{4}$
function inInvalidPhone() {
  if (phone.validity.valueMissing) {
    phoneErrorBox.textContent = "Veuillez entrer votre numéro de téléphone.";
    phoneErrorBox.classList.add("display");
    phone.classList.add("error");
    phone.classList.remove("success");
    }else if (phone.validity.patternMismatch) { 
    phoneErrorBox.textContent = "Veuillez entrer un numéro de téléphone valide. Ex: 555-555-5555";
    phoneErrorBox.classList.add("display");
    phone.classList.add("error");
    phone.classList.remove("success");
    }
    console.log(phone.validity.patternMismatch);
}
