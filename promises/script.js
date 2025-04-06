// creating a promise object

const userLeft = false;
const userWatchingCatMeme = false;

function checkUserWatching() {
  return new Promise((resolve, reject) => {
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
