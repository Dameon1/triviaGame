

/* document ready... allows the page to load completely before linking anything to the html
              ....very important*/

  $(document).ready(function() {





//  { check to see if working  ~see cl function or open console to see stack
    console.log("working");

//--- enables visual thru whole stack--- will appear after 3 seconds on bottom of console reports}
    setTimeout(function() {
      console.log("still working");
        },1000*3);









//function for a timer
function timer() {
      let timeLeft = 2;

      let timerId = setInterval(countdown, 1000);

      function countdown() {
        if (timeLeft < 0) {
          clearInterval(timerId);
            alert("Out of Time");
            return;
        } else {
          $("#timer").text(timeLeft);
          timeLeft--;
        }
      }
}

// clearTimeout();


// create some variables to work with
  let $a = $("#first");
  let $b = $("#second");
  let $setTimeout = setTimeout(function(){},1000*5);

  let q1 = {
    question: "Who wrote?",
    answers: ["a","b","c","d"],
};
let q2 = {
  question: "Who sang?",
  answers: ["a","b","c","d"],
};
let q3 = {
  question: "Who produced?",
  answers: ["a","b","c","d"],
};

let questionIndex = 0;
let questions = [q1, q2, q3];

let getQuestionText = (questionIndex) => {
  return questions[questionIndex].question;
  console.log(questions[questionIndex].question);
}

let getQuestionAnswers = (questionIndex) => {

    for ( let i = 0; i < 4; i++) {
        let choice = $("<h3>");
        choice.text("Hello");
        choice.addClass('click');
        choice.attr("value",i);
        $("#choices").append(choice);
    }
  return questions[questionIndex];
  console.log(questions[questionIndex].answers[questionIndex]);
}

  let correct = 0;
  let wrong   = 0;
/*
 //add question objects to draw from
 results = () => {
   //question value === user picked value
 };
getQuestionText();
getQuestionAswers();
// create classes*/





/* logging
     1.document
     2.main object
     3.first oject in main object
     4.first key of first object


 cl = () => {
    console.log(this);
    console.log(questions);
    console.log(questions[0]);
    console.log(q1.question);
};

// calling initial stack logs --- enable/disable for bugging
cl();

*/


  /*let maker = (arg,y) => {
    for ( let i = 0; i < 5; i++) {
      let choice = $("<h3>");
      choice.text(y[i]);
      choice.addClass('click');
      choice.attr("value",i);


      $("#choices").append(choice);
    }
      $(".click").on('click',function() {
        //Adding a click for response functionality

        console.log("You clicked an answer");

    });
    $("#question").text(x+"");
    $("#question").attr('value',Math.floor(Math.random()*4));
    //timer function
}

 /*constructor(q1.q1,q1.q1choices);
id="page"

 */


/*
alert(example.constructor(q1.q1,q1.q1choices));
*/
// Ask question q1.q1 with console.log of nextQuestion


//created a couple of onclicks for working functinality
$("#timer").on('click',function() {

  $("#choices").empty();

  timer();
  getQuestionAnswers();
});

$("#test").on('click', function() {
  $("#choices").empty();

});





//Create a for-loop to iterate through the q1.q1choices array


//onClick functionality

//determine resultsDisplay

//reset timer and ask nextQuestion

// make functions to use, nextQuestion,timerReset,resultsDisplay
timerReset = () => {

}



// attach to html






// display results




});
