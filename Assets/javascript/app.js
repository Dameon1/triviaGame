'use strict';

/* document ready... allows the page to load completely before linking anything to the html
              ....very important*/
// This file makes use of jQuery syntax.
$(document).ready(function() {

  let correct = 0;
  let gameStart = false;
  let timerId;
  let timeLeft;
  let questionIndex = 0;

  const q1 = {
    question: 'Party in the U.S.A',
    answers: ['Katy Perry','Miley Cyrus','Jessie Jay','Beyonce'],
  };

  const q2 = {
    question: 'Baby',
    answers: ['Justin Beiber','Justin Beiber & The Dream','Christina Milan & The Dream','Christina Milan & Justin Beiber'],
  };

  const q3 = {
    question: 'What do you want from me',
    answers: ['Pink','Adam Lambert','Adam Levine','Ed Sheeran'],
  };

  const q4 = {
    question: 'Just a little bit of you Heart',
    answers: ['Harry Styles','Justin Beiber','One Direction','Ed Sheeran'],
  };

  const q5 = {
    question: 'Right Round',
    answers: ['Flo Rida','Bruno Mars','Ne-Yo','The Dream'],
  };

  const q6 = {
    question: 'Diamonds',
    answers: ['Rhianna','Kelly Clarkson','Taylor Swift','Sia'],
  };

  const q7 = {
    question: 'Miss Independent',
    answers: ['Sia','Rhianna','Christina Aguilera','Kelly Clarkson',],
  };

  const q8 = {
    question: 'Irreplaceable',
    answers: ['Flo -Rida','Ne-Yo','Bruno Mars','Ed Sheeran'],
  };

  const q9 = {
    question: 'Little Things',
    answers: ['Bruno Mars','One Direction','Ne-Yo','Ed Sheeran'],
  };

  const q10 = {
    question: 'Nothing Compares 2 U',
    answers: ['Prince','Phil Collins','Sinead O\'connor','Sting'],
  };

  const questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
  const answerKey = [2,2,0,0,1,3,2,1,3,0];

  const getQuestionAnswers = () => {
    $('#choices').empty();
    for ( let i = 0; i < 4; i++) {
      let choice = $('<h3>');
      choice.text(questions[questionIndex].answers[i]);
      choice.attr('value',i);
      choice.addClass('click');
      $('#choices').append(choice);
    }
    $('#question').text('Who wrote the song:___'+questions[questionIndex].question+'?');
    timeStart();
  };

  $(document.body).on('click', '.click', function() {
    let userPick = $(this).attr('value');
    let parsed = (parseInt(userPick));
    if (parsed === answerKey[questionIndex]) {
      correct++;
    }
    console.log('Right Answer:' + questions[questionIndex].answers[answerKey[questionIndex]]);
    questionIndex++;
    checkIndex();
    clearInterval(timerId);
    getQuestionAnswers();
  });

  const checkIndex = () => {
    if (questionIndex === 10 ) {
      let playAgain = confirm('You got: '+correct+ 'out of 10.');
      questionIndex -= 10;
      correct = 0;
      if (playAgain !== true) {
        return;
      }
    }
  };

  const timeStart = () => {
    timeLeft = 10;
    timerId = setInterval(countdown, 1000);
  };

  const countdown = () => {
    if (timeLeft <= 0) {
      timeLeft = 10;
      clearInterval(timerId);
      questionIndex++;
      checkIndex();
      getQuestionAnswers();
    } else {
      timeLeft--;
      $('#timer').text(timeLeft);
    }
  };

  $('#timer').on('click',function() {
    if (gameStart === false) {
      getQuestionAnswers();
      gameStart = true;
    }
  });
});
