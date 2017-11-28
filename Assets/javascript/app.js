

/* document ready... allows the page to load completely before linking anything to the html
              ....very important*/

  $(document).ready(function() {

// check to see if working
    console.log("working");

// start with a timer. this is a timed question game
  setTimeout(function() {
    console.log("still working");
      },1000*3);

//function for a timer
function timer() {
      let timeLeft = 2;

      let timerId = setInterval(countdown, 1000);

      function countdown() {
        if (timeLeft < 0) {
          clearTimeout(timerId);
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
    q1: "Who wrote?",
    q1choices: ["a","b","c","d"],
};
let q2 = {
  q2: "Who sang?",
  q2choices: ["a","b","c","d"],
};
let q3 = {
  q3: "Who produced?",
  q3choices: ["a","b","c","d"],
};
  let correct = 0;
  let wrong   = 0;

 //add question objects to draw from
 results = () => {
   //question value === user picked value
 }

// create classes


  maker = (x,y) => {
    for ( let i = 0; i < y.length; i++) {
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
console.log(q1.q1);

//created a couple of onclicks for working functinality
$("#timer").on('click',function() {

  $("#choices").empty();
  maker(q1.q1,q1.q1choices);
  timer();

});

$("#test").on('click', function() {
  $("#choices").empty();
  maker(q2.q2,q2.q2choices);
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
