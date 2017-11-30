

/* document ready... allows the page to load completely before linking anything to the html
              ....very important*/

  $(document).ready(function() {


//  { check to see if working  ~see cl function or open console to see stack
    console.log("working");

//--- enables visual thru whole stack--- will appear after 3 seconds on bottom of console reports}
    setTimeout(function() {
      console.log("still working");
        },1000*3);


//--- A place to keep score

        let correct = 0;
        let wrong   = 0;

//--- question objects for oop games
  let q1 = {
    question: "Who wrote?",
    answers: ["a","b","c","d"],
};

  let q2 = {
  question: "Who sang?",
  answers: ["e","f","g","h"],
};

  let q3 = {
  question: "Who produced?",
  answers: ["i","j","k","l"],
};

let questionIndex = 0;
let questions = [q1, q2, q3];
let answerKey = [1,2,3];
let userPick;





//---Main Question function

  getQuestionAnswers = () => {
   //timer();
  $("#choices").empty();
    for ( let i = 0; i < 4; i++) {
        let choice = $("<h3>");
        choice.text(questions[questionIndex].answers[i]);
        choice.attr("value",i);
        choice.addClass('click');
        $("#choices").append(choice);
      };
        $(".click").on('click',function() {
            //Adding a click for response functionality and logging where index is for scoring purposes
            userPick = $(this).attr("value");
                    console.log("Your Pick: " + userPick);
            userPick = parseInt(userPick);

              console.log(userPick);
              results(userPick);
        });
    $("#question").text(questions[questionIndex].question+"");
    questionIndex++;
}

//This is to determine if endGame
  checkIndex = () => {
  if (questionIndex ===  3) {
      questionIndex -= 3;
      console.log("hi");
      var playAgain = confirm("Play again?");
      if (playAgain) {
        return;
      } else {
///this needs to be fixed
      }
}
}


 /*let resetGame = () => {
  let correct = 0;
  let wrong = 0;
  questionIndex -= 3;
  timer();
}
/*
something=;
 results = () => {
   //on clicks value compared to answerKey

   something = this.value;
   something = parseInt(something);


   if (something === answerKey[questionIndex]) {
   console.log("You Win!!")
 } esle {
 console.log("you lose")
}
*/
currentScore = () => {
  console.log(correct);
  console.log(wrong);
}

//
 results = (arr) => {




   //on clicks value compared to answerKey
console.log(answerKey.questionIndex);
   console.log("hi")
   if (userPick === answerKey[questionIndex]) {
   console.log("You Win!!")
 } else {
 console.log("you lose")
}
}










/*
    logging
    1.document
    2.main object
    3.first oject in main object
    4.first key of first object
*/

  cl = () => {
// logs the document
    console.log(this);
// logs the main object
    console.log(questions);
// logs the first object in the main object with a questionIndex variable
    console.log(questions[questionIndex]);
// logs the first key of the first object with a questionIndex variable
    console.log(questions[questionIndex].question);
// logs direct call of first key
    console.log(q1.question);
// logs direct call to answers array
    console.log(q1.answers);
// logs current correct score
    console.log(correct);
// logs current wrong score
    console.log(wrong);
}

// calling initial stack logs --- enable/disable for bugging
cl();


//function for a timer
function timer() {

      let timeLeft = 3;
      let timerId = setInterval(countdown, 1000);

      function countdown() {

        if (timeLeft < 0) {
          clearInterval(timerId);
            alert("Out of Time");
              wrong++;
              checkIndex();
              getQuestionAnswers();


        } else {
          $("#timer").text(timeLeft);
          timeLeft--;
        }
      }
    }
//created a couple of onclicks for working functinality
$("#timer").on('click',function() {
  getQuestionAnswers();

});

$("#test").on('click', function() {
  //getQuestionAnswers();
  //resetGame();
  //resetGame();
  console.log("working");
});

$("#choices").on('click', function() {

/*
userPick = this.value;
userPick = parseInt(userPick);


results();
*/





    //display resultsDisplay
    // reset game option
    // if yes reset else return
  getQuestionAnswers();
});
//Create a for-loop to iterate through the q1.q1choices array
//onClick functionality
//determine resultsDisplay
//reset timer and ask nextQuestion
// make functions to use, nextQuestion,timerReset,resultsDisplay
// attach to html
// display results
});
