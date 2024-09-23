const Crashsound = new Audio("/DATA/crash.mp3");
const closedsound = new Audio("DATA/closed HH.wav");
const floorsound = new Audio("/DATA/floor.mp3");
const kicksound = new Audio("DATA/kick.mp3");
const openHHsound = new Audio("DATA/Open HH.mp3");
const Ridesound = new Audio("DATA/Ride.mp3");
const Snaresound = new Audio("DATA/Snare.mp3");
const Splashsound = new Audio("DATA/splash.wav");
const Tomsound = new Audio("DATA/Tom.wav");

document.addEventListener("keydown", (e) => {
  let userInput = e.key;

  switch (userInput) {
    case "1":
      Crashsound.play();

      break;

    case "2":
      Splashsound.play();
      break;

    case "3":
      Ridesound.play();
      break;

    case "4":
      closedsound.play();
      break;

    case "5":
      openHHsound.play();
      break;

    case "6":
      floorsound.play();
      break;
    case "7":
      kicksound.play();
      break;

    case "8":
      Snaresound.play();
      break;
    case "9":
      Tomsound.play();
      break;

    default:
      console.log("INVALID REQUEST");
      break;
  }
});
