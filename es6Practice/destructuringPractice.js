var a, b, rest;

[a,b] = [10, 20];

console.log(a);
console.log(b);
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

var args = [0,1,2];

console.log(...args, args);


function myFunc(x,y,z) {console.log('16', x,y,z)};
var arr = [1,2,3];

myFunc(...arr);

console.log(...[3]);

function AnotherFunc(v,w,x,y,z) {

  console.log(...arguments) };

var args = [0,1];

console.log(AnotherFunc(-1, ...args, 2, ...[3]));

var parts = ['shoulders', 'knees'];

var lyrics = ['head', ...parts];

console.log(lyrics);


var dateFields = [1970, 0, 1];
var d = new Date(...dateFields);

console.log(41, d);

//like array.slice();

var arr = [1,2,3];

var arr2 = [...arr];

console.log(arr2);

var a = [[1],[2],[3]];

console.log(...a);
calc(...a);

function calc(...nums) {
  nums.forEach( num => console.log('57', num))
}


console.log([...[1,2,3], ...[4,5,6]])

const obj = {'key': 1, 'key2': 2};

const {aa, bb} = obj;
console.log(aa, bb);


//Rest parameters -returns an array based
  //on number of elements passed into function

//destructuring breaks up objects and arrays into
  //distinct variables
//spread operator --extract elements from iterable
  //objects
function newFunc(a, b, ...args) {
   args.forEach(a => console.log(a*2));
}

newFunc(1,2,3,4,5);
var mike, jim, bob
[mike, jim, bob] = [1,2,3]
console.log(mike);


var a, b, rest;

[a,b] = [10, 20];

[a,b, ...rest] = [10,20, 30, 40, 50];

console.log(a,b, rest);

let {a: c, b: j} = {a: 10, b: 30};

console.log(22, c);

let {ab, bc} = {b: 10, bc: 20};

console.log(100, ab);

var x = [19,2,3,4,5];

var [y, ...z] = x;

console.log(z);

var foo = [1,2,3,4];
var [one, two, three, four] = foo;

console.log(one);

//assignemnt separate from declaration

 //var a, b;
 [a,b] = [1211,2]
console.log(117, a);
[a=5, b=7] = [132, 44];
console.log(a, b);

const f = () => [1,2,3];

let [ad, , bd] = f();


[,,] = f();

var [a, ...b] = [1,2,3];

console.log(b);

//objects

var o = {p: 42, q: true};

var {p, q} = o;

console.log(p, q);

var a, b

//need parents as {a, b} is considered
  //function block and not object literal
({a, b} = {a: 123, b: 321});

console.log(a, b);


function reverse(array, begin = 0, end = array.length - 1) {
  let temp;
  //console.log(begin, end);
  while(begin < end) {
  // console.log(array);
    temp = array[begin];
    array[begin++] = array[end];
    array[end--] = temp;
    //console.log(157, array);
  }
  //console.log(array.join(''));
}

//reverse('mike'.split(''));

let strArray = 'Michael is a cool guy'.split('');
console.log(strArray);

function reverseStringArray(array) {


  for (var i = 0, j = array.length - 1; i < j; i++, j--) {


  }

}

//console.log(reverseStringStack(strArray));


function reverseStringStack(array) {
  var stack = [];
  let word;
  array.forEach(val => {
    word = word || '';
    console.log(185, word);
    if(val === ' ') {
      console.log(187, word);
      let space = stack.length === 0 ? '' : ' ';
      stack.unshift(...word.split('') + space);
      word = null;
    } else {
      word += val;
    }
    //console.log(...stack);


    });
  console.log(192, stack);
  return stack;
}

// function newArrStack(array) {
//   let arr = new Array(array.length);
//   for (var i = array.length - 1; i >= 0; i--) {

//   }

// }

function reverse1(arr) {
  reverseChars(arr);

}

function reverseChars1(array, start = 0, end = array.length - 1) {
  console.log(start, end);


}

// console.log(reverse('Mike'.split('')));

// console.log(reverseChars1([], 3,4));


function reverseWords(array) {
  //console.log(227, array);
  reverse(array, 0, array.length - 1);
  //console.log('229', array);
  let start;
  let end;
  array.forEach((val, i) => {

    if(i === 0 || array[i - 1] === ' ') {
      start = i;
    }

    if(array[i + 1] === ' ' || i + 1 === array.length) {
      end = i;
      reverse(array, start, end);
    }



  });
  //console.log(224, array);
  return array;

}

function reverse(array, start, end) {

  while(start < end) {
    let temp = array[start];
    array[start++] = array[end];
    array[end--] = temp;
  }
}

var strArray1 = 'a is a word';

console.log(reverseWords(strArray1.split('')));

//can parse data returned from functions










