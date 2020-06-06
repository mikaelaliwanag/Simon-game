var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = true;
var level = 0;

//keypress event that starts game
$(document).keypress(function() {
  if(started) {
       $("#level-title").text("Level " + level);
       nextSequence();
       started = false;
     }
});

//on click function that stores user clicked button pattern
$(".btn").click(function() {

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    animateButton(userChosenColor);
    playSound(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
});


function checkAnswer(currentLevel) {

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
               nextSequence();
            }, 1000);
      }

    } else {

        var audio = new Audio("sounds/wrong.mp3");
        audio.play();

        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

//generates random button color pattern
function nextSequence() {

    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100); 

    playSound(randomChosenColor);

}

// plays button sounds
function playSound(name) {

     var audio = new Audio("sounds/" + name + ".mp3");
     audio.play();
}

//pressed animation for user clicked buttons
function animateButton(currentColor) {

    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}

function startOver() {
    level = 0;
    gamePattern = [];
    started = true;
    
    $("#level-title").text("Game over! Press any key to restart.")
}


