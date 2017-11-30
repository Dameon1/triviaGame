

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

          console.log(userPick);
              //console.log(parseInt(userPick));
          let    parsed = (parseInt(userPick));

          console.log(parsed);
          console.log(answerKey[questionIndex]);

          if (parsed === answerKey[questionIndex]) {
                correct++;
                console.log(correct);
                console.log(wrong);
              } else {
                wrong++;
                console.log(correct);
                console.log(wrong);
                currentScore();
              };
    });

    $("#question").text("Who wrote the song:___"+questions[questionIndex].question+"?");

    questionIndex++;
};



  //This is to determine if endGame
    checkIndex = () => {
    if (questionIndex ===  10) {
        questionIndex -= 10;
        alert("hi");
        //reset();
  }

}


  let reset = () => {
    let correct = 0;
    let wrong = 0;
    //questionIndex -= 4;
    getQuestionAnswers();

    //timer();
  }


  currentScore = () => {
    console.log(correct);
    console.log(wrong);
  }




          //results(userPick);
          results = (userPick) => {

            //userPick = $(this).attr("value");
            //console.log("Your Pick: " + userPick);
            userPick = parseInt(userPick);
            console.log("Your Pick: " + userPick);



         }




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

             let timeLeft = 3;
             let timerId = setInterval(countdown, 1000);

             function countdown() {

               if (timeLeft < 0) {
                 clearInterval(timerId);
                   alert("Out of Time");
                     wrong++;
                     console.log("~~~~~~~~~~");
                     console.log(wrong);
                     checkIndex();
                     getQuestionAnswers();
                     timer();

               } else {
                 $("#timer").text(timeLeft);
                 timeLeft--;
               }
               //checkIndex();
             }
           }

           //created a couple of onclicks for working functinality
           $("#timer").on('click',function() {
             getQuestionAnswers();
             timer();
           });

           $("#test").on('click', function() {
             //getQuestionAnswers();
             //resetGame();
             //resetGame();
             console.log("working");
           });

           $("#choices").on('click', function() {

           //timer();
               //display resultsDisplay
               // reset game option
               // if yes reset else return
            getQuestionAnswers();
           });


            //console.log("Your Pick: " + userPick);
            //console.log("This value parsed? " + parseInt(userPick));


                //  let test =  valueOf(userPick)
                //  console.log("This value has test value of " + test);
                //  console.log("This value has value of " + valueOf(userPick));

                //console.log(answerKey[1]);
                //console.log("Your parsed Pick: " + parsed);



        /*    userPick = $(this).attr("value");
              if (userPick === answerKey[questionIndex]) {
                console.log('winning');
              }
              else {
                console.log("losing");
              }*/







      //*var playAgain = confirm("Play again?");
      //if (playAgain) {
        //return;
      //} else {
///
/*this needs to be fixed
      }
}
}
*/

/*let reset = () => {
  let correct = 0;
  let wrong = 0;
  questionIndex -= 3;
  //timer();
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



 /*results = (userPick) => {

   //userPick = $(this).attr("value");
   //console.log("Your Pick: " + userPick);
   userPick = parseInt(userPick);
   console.log("Your Pick: " + userPick);


   //on clicks value compared to answerKey
   //console.log("hi")
  // if (userPick === answerKey[questionIndex]) {
  // console.log("You Win!!")
 //} else {
// console.log("you lose")
}











/*
    logging
    1.document
    2.main object
    3.first oject in main object
    4.first key of first object
*/



// calling initial stack logs --- enable/disable for bugging
//cl();



//Create a for-loop to iterate through the q1.q1choices array
//onClick functionality
//determine resultsDisplay
//reset timer and ask nextQuestion
// make functions to use, nextQuestion,timerReset,resultsDisplay
// attach to html
// display results
});
