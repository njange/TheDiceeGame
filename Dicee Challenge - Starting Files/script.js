var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png"; 

// assuming the image folder is in the same directory as your script.js file
var randomImageSource = "images/" + randomDiceImage; 

// change the source of the img with id="leftDice" to the random image source
document.getElementById('leftDice').src = randomImageSource;