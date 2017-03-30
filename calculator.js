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
      console.log('11', calcQ);
      //calculate
    }
    else {
      if(Number.isInteger(val)) {
        currNum = null ? val : (currNum * base) + val;
      } else {
        calcQ.push(currNum);
        currNum = null;
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


