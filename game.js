var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 1;

//keypress event that starts game
$(document).one("keydown", function() {

    $("#level-title").text("Level " + level);
    nextSequence();

});

//on click function that stores user clicked button pattern
$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    animateButton(userChosenColor);

    playSound(userChosenColor);

});

//generates random button color pattern
function nextSequence() {
    level++;

    $("level-title").text("Level " + level);

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




