var timer = null;
var number = 10;

var changeState = function (state) {
  document.body.className = 'body_state_' + state;

  clearInterval(timer);
  number = 10;//to make the countdown start from 10 everytime you launch it
  document.getElementById('countDown').innerHTML = number; //to make the countdown start from 10 everytime you launch it

  if (state == 2) {
    timer = setInterval(function () {
        number = number - 1;
        document.getElementById('countDown').innerHTML = number;

        if(number <= 0) {
          changeState(3);
        };
    }, 800);
  } else if (state == 3){
    var success = setTimeout( function () {
      var randomNumber = Math.round(Math.random()*10);
      console.log(randomNumber);
      if (randomNumber % 2 == 0) {
        changeState(4);
      } else {
        changeState(5);
      }
    }, 2000);
  };
};
