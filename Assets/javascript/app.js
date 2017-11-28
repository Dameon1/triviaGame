

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
  let correct = 0;
  let wrong   = 0;

 //add question objects to draw from


// create classes


  constructor = (x,y) => {
    for ( let i = 0; i < y.length; i++) {
      let question = $("<h3>");
      question.text(y[i]);


      $("#choices").append(question);
    }
    $("#question").text(x+"");
  }

constructor(q1.q1,q1.q1choices);






// Ask question q1.q1 with console.log of nextQuestion
console.log(q1.q1);

//Create a for-loop to iterate through the q1.q1choices array


//onClick functionality
$
//determine resultsDisplay

//reset timer and ask nextQuestion

// make functions to use, nextQuestion,timerReset,resultsDisplay
timerReset = () => {

}



// attach to html






// display results




});
/*  for (let i = 0; i < letters.length;i++) {
      let newDiv = $("<h3>");
      letterBtn.addClass("letter-button letter-button-color letter");
      letterBtn.attr("data-letter",letters[i]);
      letterBtn.text(letters[i]);
      $("#buttons").append(letterBtn);


      }


    $(".letter-button").on('click', function(event){
      let fridgeMagnet = $("<div>");
      fridgeMagnet.addClass("letter fridge-color").text($(this).attr("data-letter"));
      $("#display").append(fridgeMagnet);
})



$("#clear").on("click",function(){
  $("#display").empty();*/
