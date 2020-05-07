const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];

function nextSequence() {
  var randomNum = Math.floor(Math.random() * 4); //generating random num between 0-3
  const randomChosenColour = buttonColours[randomNum]; //getting the colour at the index that matches the random number

  gamePattern.push(randomChosenColour); //adding the random colour generated onto the end of the gamePattern array

  $(`#${randomChosenColour}`) //concatenating the id so it matches whatever random colour is generated
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio(`sounds/${randomChosenColour}.mp3`); //concatenating the audio file name so it matches whatever random colour is generated
  audio.play();
}
