const btn = document.querySelector("#generate-btn");
const imageContainer = document.querySelector(".container");
const erromessage = document.querySelector("#error-message");
const APIKey = "N2arZILgcPWuxNwCbcxdUDmgTjho6Wif"; // API key 😅 JUST FOR TEST DON'T USE IT PLEASE

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

    //fetching the data
    fetch(url, {
      mode: "cors",
    })
      .then((res) => {
        console.log(res);

        // count the number of requests
        clickCount++;
        localStorage.setItem("clickCount", JSON.stringify(clickCount));
        countcontainer.innerHTML = `${JSON.parse(
          localStorage.getItem("clickCount")
        )}/100`;

        // check if no error occured
        if (res.ok === false) {
          // API rate limit exceeded
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        const img = document.createElement("img");
        img.src = res.data.images.original.url;
        imageContainer.innerHTML = "";
        imageContainer.appendChild(img);

        // console.log(res);
        // display the image url in the console for testing
        console.log(`Image URL: ${res.data.images.original.url}`);
      })
      .catch((error) => {
        erromessage.classList.add("display");
        erromessage.textContent = error.message;
      });
  } else {
    erromessage.classList.add("display");
    erromessage.textContent =
      "Please enter a word followed by some hastags like (optional) #cat or #dog etc.";
  }
});
