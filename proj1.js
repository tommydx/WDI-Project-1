console.log("running");
$(document).ready(function() {

  var codes = ["00", "66", "07", "17", "91", "19", "21", "50", "09", "77"];
  var unlockedCodes = [];
  var $unlocked = $("#unlocked");
  var $start = $(".start")

  var $num = $(".num")
  var $display = $("#display");
  var $timer = $("#timer")

  var time = "05:00.00";
  var startTime = null;

  var numbersSelected = 0;
  var codeGreen;
  var endTime;

  var programEnd = false;


  //START THE TIMER
  $start.on("click", function() {
    var timed = false;
    startTimer();

    $num.on("click", function() {
      numbersSelected++;

      // CONTROL ALERT AFTER LOOP
      var found = false;
      // IF VARIBLE numbersSelected IS LESS THAN 2
      // DISPLAY THE NUMBERS THE USER CLICKS
      if (numbersSelected <= 2) {
        var number = $(this).text();
        $("#display").append(number);
      } else {
          codeGreen = $("#display").text();
          // CHECK codeGreen AGAINST THE codes ARRAY TO SEE IF
          // THE USER'S INPUT IS A HIDDEN CODE
          for (var i = 0; i < codes.length; i++) {
            if (codeGreen === codes[i]) {
              var li = $("<li>").text(codeGreen);
              unlockedCodes.push(codeGreen);
              $unlocked.append(li);
              found = true;
            }
          }
          // RESET USER INPUT DISPLAY
          $display.text("");
          numbersSelected = 0;

          // ALERT USER CODE NOT FOUND
          if (!found) {
            alert("Time is running out.");
          }
        }
        // SORT THE ARRAYS AND CHECK THAT THEY ARE EQUAL TO
        // ALERT USER THEY WON
        if (codes.length === unlockedCodes.length) {
          codes.sort();
          unlockedCodes.sort();
          for (var i = 0; i < unlockedCodes.length; i++) {
            if (codes[i] === unlockedCodes[i]) {
              programEnd = true;
            }
          }
          alert("Take a breath, it's over.");
          clearInterval(endTime);
        }

    });
    // KILL THIS FUNCTION IF TIMER IS NOT RUNNING
    if (!timed) {
      $(this).off();
    }
  });

  var startTimer = function() {
    // SET TIMER FOR 5 MINUTES ( 300K MILLISECONDS)
    endTime = 300000;

    setInterval(function() {
      // DECREMENT TIMER BY 1 SECOND
      if (programEnd === false) {
        endTime -= 1000;
        console.log(endTime);
      }

      if (endTime >= 0) {
        // SET VARIABLES TO CONVERT MILLISECONDS TO MINUTES : SECONDS
        var minutes = Math.floor(endTime / 60000);
        var seconds = Math.floor((endTime % 60000) / 1000).toFixed(0);
        // BORROWED FROM HERE FOR THE SECONDS TERNARY - http://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
        var final = "0" + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        $timer.text(final);
      }
      // ATTEMPT TO STOP THE TIMER AND SET TO 00:00 OR CLEAR THE TIMER FIELD
      if (endTime <= 0) {
        alert("You failed to unlock the codes. The world ended.");
        clearInterval(endTime);
        programEnd = true;
      }
    }, 1000);

  }

});



/* PROGRAM codeLock

Display a number pad to the user
Each field represented by a div
Each key represented by a div
Above this will be a field to display the
code numbers the user has currently chosen
To the right of this display will be a list
populating with any codes the user has unlocked
Above this list will be a decrementing timer
to display how much time the user has left

Create an array of codes to be unlocked.
Codes should have corresponding unlockables.

INITIALIZE PROGRAM

LISTEN for click
DISPLAY number user clicked in INPUT field.
LISTEN for second click.
DISPLAY number user clicked in INPUT field.

IF user chose a valid code
DISPLAY code to the right in list
LOG unlocked code to array
UNLOCK and execute image/sound/alert corresponding to code
CLEAR INPUT field.

COMPARE array for codes unlocked to code array
IF array.length is not equal
LISTEN for user INPUT
ELSE
END game

IF timer runs out
END game
THEN clear all fields

END codeLock
*/
