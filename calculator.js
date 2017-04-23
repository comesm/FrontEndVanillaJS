var table = document.getElementById('calcButtons');

var calcQ = [];

var base = 10;
var currNum = null;
var screen = document.getElementById('screen');

table.addEventListener('click', function(event) {
  if(event.target.tagName === 'TD') {
    let val = parseInt(event.target.innerHTML) ||
      event.target.innerHTML;
    if(val === '=') {
      var total = 0;
      var lastNum = calcQ[0];
      for (var i = 1; i < calcQ.length; i++) {
        if(Number.isInteger(calcQ[i])) {
          total = calcQ[0];
        }

      }


      updateScreen(total);
      //calculate
    }
    else {
      if(Number.isInteger(val)) {
        currNum = null ? val : (currNum * base) + val;
      } else {
        calcQ.push(currNum);
        currNum = null;
        if(calcQ.length !== 0 && Number.isInteger(calcQ[calcQ.length - 1])
        calcQ.push(val);
      }
      console.log('19', currNum);
      updateScreen(event.target.innerHTML);
    }
  }
})


function updateScreen(value) {
  screen.innerHTML = value;

}


