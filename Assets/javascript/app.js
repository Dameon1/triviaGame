

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
//
//--- question objects for oop games
  let q1 = {
    question: "Party in the U.S.A",
    answers: ["Katy Perry","Miley Cyrus","Jessie Jay","Beyonce"],
};

  let q2 = {
  question: "Baby",
  answers: ["Justin Beiber","Justin Beiber & The Dream","Christina Milan & The Dream","Christina Milan & Justin Beiber"],
};

  let q3 = {
  question: "What do you want from me",
  answers: ["Pink","Adam Lambert","Adam Levine","Ed Sheeran"],
};

let q4 = {
  question: "Just a little bit of you Heart",
  answers: ["Harry Styles","Justin Beiber","One Direction","Ed Sheeran"],
};

let q5 = {
question: "Right Round",
answers: ["Flo Rida","Bruno Mars","Ne-Yo","The Dream"],
};

let q6 = {
question: "Diamonds",
answers: ["Rhianna","Kelly Clarkson","Taylor Swift","Sia"],
};
let q7 = {
  question: "Miss Independent",
  answers: ["Sia","Rhianna","Christina Aguilera","Kelly Clarkson",],
};

let q8 = {
question: "Irreplaceable",
answers: ["Flo -Rida","Ne-Yo","Bruno Mars","Ed Sheeran"],
};

let q9 = {
question: "Little Things",
answers: ["Bruno Mars","One Direction","Ne-Yo","Ed Sheeran"],
};

let q10 = {
  question: "Nothing Compares 2 U",
  answers: ["Prince","Phil Collins","Sinead O'connor","Sting"],
};

let questionIndex = 0;
let questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
let answerKey = [2,2,0,0,1,3,2,1,3,0];
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

          //console.log(userPick);
              //console.log(parseInt(userPick));
          let    parsed = (parseInt(userPick));
            if (parsed === answerKey[questionIndex]) {
                correct++;
                results();
                checkIndex();
              } else {
                wrong++;
                results();
                checkIndex();
              };

    });

    $("#question").text("Who wrote the song:___"+questions[questionIndex].question+"?");

    questionIndex++;
};



  //This is to determine if endGame
    checkIndex = () => {
    if (questionIndex === 10 ) {
        questionIndex -= 10;
      let playAgain = confirm("You got: "+correct+ "out of 10.")//reset();
        if (!playAgain) {
          return;
        }//reset();
  }

}


  let reset = () => {
    let correct = 0;
    let wrong = 0;
    getQuestionAnswers();

    //timer();
  }





          //results(userPick);
          results = () => {
              console.log("Right Answer:" + questions[questionIndex].answers[answerkey.questionIndex]);
            //userPick = $(this).attr("value");
            //console.log("Your Pick: " + userPick);

            console.log("Your Pick: " + userPick);



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


       //function for a timer
       function timer() {

             let timeLeft = 10;
             let timerId = setInterval(countdown, 1000);

             function countdown() {

              if (timeLeft < 0) {
                clearInterval(timerId);
                  alert("Out of Time");
                    wrong++;
                    checkIndex();
                    getQuestionAnswers();
                    timer();
               } else {
                 $("#timer").text(timeLeft);
                 timeLeft--;
               }
             }
}

           //This starts the game
           $("#timer").on('click',function() {
             getQuestionAnswers();
             timer();
           });

        


//Create a for-loop to iterate through the q1.q1choices array
//onClick functionality
//determine resultsDisplay
//reset timer and ask nextQuestion
// make functions to use, nextQuestion,timerReset,resultsDisplay
// attach to html
// display results
});
