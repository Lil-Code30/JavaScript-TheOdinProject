const btn = document.querySelector("#generate-btn");
const imageContainer = document.querySelector(".container");
const erromessage = document.querySelector("#error-message");
const APIKey = "KLeZw5WAr0Rb6dAMd9Yw81DqOHs4i08L"; // API key  desactivated need to get a new one
// from https://developers.giphy.com

let clickCount = JSON.parse(localStorage.getItem("clickCount")) || 0;
clickCount = Number(clickCount);
const countcontainer = document.querySelector("#count");

countcontainer.innerHTML = `${JSON.parse(
  localStorage.getItem("clickCount")
)}/100`;

// set time interval to reset the click count every hour
let interval = setInterval(() => {
  clickCount = 0;
  localStorage.setItem("clickCount", JSON.stringify(clickCount));
  countcontainer.innerHTML = `${JSON.parse(
    localStorage.getItem("clickCount")
  )}/100`;
}, 3600000);

btn.addEventListener("click", () => {
  let input = document.querySelector("input");

  //verify the input value
  if (input.value) {
    input = input.value;

    //url for the API
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=${APIKey}&s=${input}`;

    erromessage.classList.remove("display");
    erromessage.textContent = "";

    // call the function to fetch the data
    getRandomGif(url);
  } else {
    erromessage.classList.add("display");
    erromessage.textContent =
      "Please enter a word followed by some hastags like (optional) #cat or #dog etc.";
  }
});

// function using async await to fetch the data
async function getRandomGif(url) {
  try {
    const res = await fetch(url, {
      mode: "cors",
    });

    // count the number of requests
    clickCount++;
    localStorage.setItem("clickCount", JSON.stringify(clickCount));
    countcontainer.innerHTML = `${JSON.parse(
      localStorage.getItem("clickCount")
    )}/100`;

    const gifData = await res.json();
    const img = document.createElement("img");

    img.src = gifData.data.images.original.url;

    // display the image url in the console for testing
    console.log(`Image URL: ${gifData.data.images.original.url}`);

    imageContainer.innerHTML = "";
    imageContainer.appendChild(img);
  } catch (error) {
    erromessage.classList.add("display");
    erromessage.textContent = error.message;
  }
}
