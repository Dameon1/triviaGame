

/* document ready... allows the page to load completely before linking anything to the html
              ....very important*/

  $(document).ready(function() {

// check to see if working
    console.log("working");

// start with a timer. this is a timed question game
  setTimeout(function() {
    console.log("still working");
      },1000*3);

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


// create classes


  maker = (x,y) => {
    for ( let i = 0; i < y.length; i++) {
      let question = $("<h3>");
      question.text(y[i]);
      question.addClass('click');
      question.attr("value",i);
      $(".click").on('click',function() {
        //Adding a click for response functionality
        console.log([i]);
        console.log("value");
        console.log(this.attr);
        console.log(this.class);
      })
      $("#choices").append(question);
    }
    $("#question").text(x+"");
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
$("#page").on('click',function() {
  $("#choices").empty();
  maker(q1.q1,q1.q1choices);
});

$("#test").on('click', function(){
  $("#choices").empty();
  maker(q2.q2,q2.q2choices);
})





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
