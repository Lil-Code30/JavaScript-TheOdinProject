// creating a promise object

const userLeft = false;
const userWatchingCatMeme = true;

function checkUserWatching() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2 seconds passed");
    }, 2000);
    if (userLeft) {
      reject({
        name: "User Left :(",
        message: "Bad Video Quality:( ",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "Cat > your video",
      });
    } else {
      resolve({
        name: "User watching your video",
        message: "Good video Like and Subscribe",
      });
    }
  });
}

checkUserWatching()
  .then((data) => {
    console.log(data.name + " " + data.message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

console.log("Bye");
