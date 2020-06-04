var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

//on click function that stores user clicked button pattern in userClickedPattern array
$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    animateButton(userChosenColor);

    playSound(userChosenColor);
})

//generates random button color pattern. FLash animation.
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + currentColor).fadeIn(100).fadeOut(100).fadeIn(100); 

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