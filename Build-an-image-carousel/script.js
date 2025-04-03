const nextBtn = document.querySelector("#next-button");
const prevBtn = document.querySelector("#previous-button");

const images = document.querySelectorAll(".image-box");

let currentImage = 0;

const slidesImage = (n) => {
  if (n < 0) {
    currentImage = images.length - 1;
  }

  if (n > images.length - 1) {
    currentImage = 0;
  }

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  images[currentImage].style.display = "block";
};

slidesImage(currentImage);

nextBtn.addEventListener("click", () => {
  currentImage++;
  slidesImage(currentImage);
});

prevBtn.addEventListener("click", () => {
  currentImage--;
  slidesImage(currentImage);
});
