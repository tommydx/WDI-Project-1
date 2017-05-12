console.log("running");
$(document).ready(function() {

  var codes = ["00", "66", "07", "17", "91", "19", "21", "50", "09", "77"];
  var unlockedCodes = [];
  var $unlocked = $("#unlocked");

  var $num = $(".num")
  var $display = $("#display");
  var $timer = $("#timer")

  var $one = $("#one");
  var $two = $("#two");
  var $three = $("#three");
  var $four = $("#four");
  var $five = $("#five");
  var $six = $("#six");
  var $seven = $("#seven");
  var $eight = $("#eight");
  var $nine = $("#nine");
  var $zero = $("#zero");

  var time = "05:00.00";
  var startTime = null;

  $(document).on("keypress", function(event) {
    if (event.which === 49) {
      var number = $("#one").text();
      $("#display").text(number);
    } else if (event.which === 50){
      var number = $("#two").text();
      $("#display").text(number);
    } else if (event.which === 51) {
      var number = $("#three").text();
      $("#display").text(number);
    } else if (event.which === 52) {
      var number = $("#four").text();
      $("#display").text(number);
    } else if (event.which === 53) {
      var number = $("#five").text();
      $("#display").text(number);
    } else if (event.which === 54) {
      var number = $("#six").text();
      $("#display").text(number);
    } else if (event.which === 55) {
      var number = $("#seven").text();
      $("#display").text(number);
    } else if (event.which === 56) {
      var number = $("#eight").text();
      $("#display").text(number);
    } else if (event.which === 57) {
      var number = $("#nine").text();
      $("#display").text(number);
    } else if (event.which === 48) {
      var number = $("#zero").text();
      $("#display").text(number);
    }

  });

  var numbersSelected = 0;
  var codeGreen;

  $num.on("click", function() {
    numbersSelected++;
    startTimer();

    // CONTROL ALERT AFTER LOOP
    var found = false;

    if (numbersSelected <= 2) {
      var number = $(this).text();
      $("#display").append(number);
    } else {
      codeGreen = $("#display").text();
      for (var i = 0; i < codes.length; i++) {
        if (codeGreen === codes[i]) {
          var $li = $("<li>").text(codeGreen);
          unlockedCodes.push(codeGreen);
          $unlocked.append($li);
          found = true
        }
        $display.text("");
        numbersSelected = 0;
      }
      // ALERT USER CODE NOT FOUND
      if (!found) {
        alert("Time is running out.");
      }
    }

  });

  function startTimer() {
    // SET TIMER FOR 5 MINUTES ( 300K MILLISECONDS)
    var endTime = 300000;

    setInterval(function() {
      // DECREMENT TIMER BY 1 SECOND
      endTime -= 1000;

      console.log(endTime);

      if (endTime > 0) {
        $timer.text(endTime);

        var minutes = endTime / 6000;
        var seconds = endTime % 60;
        endTime = "0" + minutes + ":" + seconds;
      }

    }, 1000);
  }

});


// WAS ATTEMPTING A TIMER BELOW

// $timer.on("click", function() {
//   var minutes = "0";
//   var seconds = "0";
//   var timer = minutes, seconds;
//   setInterval(function() {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);
//
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     } else {
//       minutes = minutes;
//     }
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     } else {
//       seconds = seconds;
//     }
//
//     $timer.text(minutes + ":" + seconds)
//   });
// });



// GOT SOME HELP AND WAS ABLE TO GET RID OF THE CODE BELOW
// WHERE ONLY "ONE" WORKED ON THE CLICK
// $num.on("click", function() {
//   console.log("clicked");
//   if ($one.on("click", function() {
//     var number = $("#one").text();
//     $("#display").text(number);
//   })); else if ($two.on("click", function() {
//         var number = $("#two").text();
//         $("#display").text(number);
//   })); else if ($three.on("click", function() {
//         var number = $("#three").text();
//         $("#display").text(number);
//   })); else if ($four.on("click", function() {
//         var number = $("#four").text();
//         $("#display").text(number);
//   })); else if ($five.on("click", function() {
//         var number = $("#five").text();
//         $("#display").text(number);
//   })); else if ($six.on("click", function() {
//         var number = $("#six").text();
//         $("#display").text(number);
//   })); else if ($seven.on("click", function() {
//         var number = $("#seven").text();
//         $("#display").text(number);
//   })); else if ($eight.on("click", function() {
//         var number = $("#eight").text();
//         $("#display").text(number);
//   })); else if ($nine.on("click", function() {
//         var number = $("#nine").text();
//         $("#display").text(number);
//   })); else if ($zero.on("click", function() {
//         var number = $("#zero").text();
//         $("#display").text(number);
//   }));
// });









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
