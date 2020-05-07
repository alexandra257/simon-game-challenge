/*instructions for challenge:

STEP 1: set up files & jquery



STEP 2:
1. Inside game.js create a new function called nextSequence()

2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber

You can use the Chrome console to verify that your code creates random numbers between the correct range.


3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .

4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.

5. At the top of the game.js file, create a new empty array called gamePattern.

6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.




STEP 3 - Show the Sequence to the User with Animations and Sounds
1. Use jQuery to select the button with the same id as the randomChosenColour

2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.

You should end up with an effect like this:


3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.



STEP 4- Check Which Button is Pressed
1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.

2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.

--> So if the Green button was clicked, userChosenColour will equal its id which is "green".


3. At the top of the game.js file, create a new empty array with the name userClickedPattern.

4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern

At this stage, if you log the userClickedPattern you should be able to build up an array in the console by clicking on different buttons.




STEP 5 - Add Sounds to Button Clicks
1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played. e.g if the Green button is clicked, then green.mp3 should be played.

2. Create a new function called playSound() that takes a single input parameter called name.

3. Take the code we used to play sound in the nextSequence() function and move it to playSound().

4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.



STEP 6 - Add Animations to User Clicks
1. Create a new function called animatePress(), it should take a single input parameter called currentColour.

2. Take a look inside the styles.css file, you can see there is a class called "pressed", it will add a box shadow and changes the background colour to grey.


3. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().

4. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.

Once complete, you will get this effect when you click on any button.

*/
