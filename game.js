const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];

const userClickedPattern = [];

//--------------------------------------------
function nextSequence() {
  let randomNum = Math.floor(Math.random() * 4); //generating random num between 0-3
  const randomChosenColour = buttonColours[randomNum]; //getting the colour at the index that matches the random number

  gamePattern.push(randomChosenColour); //adding the random colour generated onto the end of the gamePattern array

  $(`#${randomChosenColour}`) //concatenating the id so it matches whatever random colour is generated
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour); //calls playSound function & plays relevant sound
}

//-------------------------------------------

$(".btn").on("click", (event) => {
  let userChosenColour = $(event.currentTarget).attr("id"); //get's the id of the clicked button
  userClickedPattern.push(userChosenColour); //adds the clicked button the the userClickedPattern array
  //   console.log(userClickedPattern);
  playSound(userChosenColour); //calls playSound function & plays relevant sound when button is clicked
  animatePress(userChosenColour);
});

//------------------------------
function playSound(name) {
  var audio = new Audio(`sounds/${name}.mp3`); //concatenating the audio file name so it matches whatever random colour is generated
  audio.play();
}

//------------------------------
function animatePress(currentColour) {
  $(`.${currentColour}`).addClass("pressed"); //concatenate so we can select the class (needed the . before the colour)

  setTimeout(() => {
    //adding delay to the removal of the class
    $(`.${currentColour}`).removeClass("pressed"); //removing the class of the selected button
  }, 100); // delay time
}
