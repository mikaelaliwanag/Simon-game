let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = true;
let level = 0;

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
    if(!started) {
        var userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);

        animateButton(userChosenColor);
        playSound(userChosenColor);

        checkAnswer(userClickedPattern.length - 1);
    }
});

//checks user answer against game pattern. Displays game over when user gets pattern wrong.
function checkAnswer(currentLevel) {

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
               nextSequence();
            }, 450);
       
        }

    } else {
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game over! Press Any Key to Restart.")

        startOver();
    }
}

//generates game pattern
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

//restarts game
function startOver() {
    level = 0;
    gamePattern = [];
    started = true;
}


