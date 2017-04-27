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



