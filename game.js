const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

function nextSequence() {
  var randomNum = Math.floor(Math.random() * 4); //generating random num between 0-3
  const randomChosenColour = buttonColours[randomNum]; //getting the colour at the index that matches the random number
  //   console.log(randomNum); //checking that the colour matched the number/index generatod
  console.log(randomChosenColour);

  if (randomChosenColour === "red") {
    //if the red button is chosen, blink it
    $("#red").fadeOut(500).fadeIn(500);
  }

  return gamePattern.push(randomChosenColour); //adding the random colour generated onto the end of the gamePattern array
}

console.log(nextSequence());
console.log(gamePattern);
// console.log(nextSequence());
// console.log(gamePattern);
// console.log(nextSequence());
// console.log(gamePattern);
