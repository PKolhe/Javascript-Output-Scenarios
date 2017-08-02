//================================ Outputs ============================

console.log(num1);
var num1 = 10;

/* console.log(num2);  // compile time error: Blocked scoped variable num2 used before it is declared
let num2 = 20; */

//=====================================================================

for(var i = 0; i<3; i++) {
    console.log(i);
}
console.log(i);

/*for(let j = 0; j<3; j++) {
    console.log(j);
}
console.log(j); */      // Can not find name 'j'

//==========================================================================

var bar = null; // null in javascript is considered as object
console.log(typeof bar === 'object');   // logs true
console.log(bar !== null && typeof bar === 'object');   // logs true

//==========================================================================

(function(){
  var a = b = 3;
  /* above statement is shorthand for 
     b = 3;
     var a = b; */
})();

console.log("a defined? " + (typeof a !== 'undefined'));    // false  a is undefined outside enclosed function 
console.log("b defined? " + (typeof b !== 'undefined'));    // true   b is considered as global variable

//=============================================================================================

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);     
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

/* Output will be :
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar 

In the inner function, though, this no longer refers to myObject. As a result, this.foo is undefined in the inner function, 
whereas the reference to the local variable self remains in scope and is accessible there. */

//=========================================================================================

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());

/* Output are: 
foo1 returns:
Object {bar: "hello"}
foo2 returns:
undefined 

The reason for this has to do with the fact that semicolons are technically optional in JavaScript (although omitting them is 
generally really bad form). 
As a result, when the line containing the return statement (with nothing else on the line) is encountered in foo2(), 
a semicolon is automatically inserted immediately after the return statement. */

//=========================================================================================================

console.log(typeof NaN === "number");  // logs "true"

console.log(NaN === NaN);  // logs "false"

//==========================================================================================================

console.log(0.1 + 0.2);             // 3.00000000000000004
console.log(0.1 + 0.2 == 0.3);      // false

//==========================================================================================================

// Discuss possible ways to write a function isInteger(x) that determines if x is an integer.   
function isInteger1(x) { 
    return (x^0) === x; 
} 

function isInteger2(x) { 
    return Math.round(x) === x; 
}

function isInteger3(x) { 
    return (typeof x === 'number') && (x % 1 === 0); 
}

function isInteger4(x) { 
    return parseInt(x, 10) === x; 
}

console.log(isInteger1(10));
console.log(isInteger1('Pankaj'));
console.log(isInteger1(12.45));
console.log(isInteger1(true));

//==========================================================================================================

(function() {
    //console.log(1); 
    //setTimeout(function(){console.log(2)}, 10); 
    //setTimeout(function(){console.log(3)}, 0);   //setTimeout() puts execution of its referenced function into the event queue if the browser is busy. hence this stement will execute immediately
    //console.log(4);
})();

/* Output:
    1
    4
    3
    2

 */


//==========================================================================================================
//Write a sum method which will work properly when invoked using either syntax below.

console.log(sum1(2,3));   // Outputs 5
console.log(sum1(2)(3));  // Outputs 5

function sum1(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}
// OR 
function sum2(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}

//==========================================================================================================

console.log(1 +  "2" + "2");        // 122
console.log(1 +  +"2" + "2");       // 32
console.log(1 +  -"1" + "2");       // 02
console.log(+"1" +  "1" + "2");     // 112
console.log( "A" - "B" + "2");      // NaN2
console.log( "A" - "B" + 2);        // Nan

//==========================================================================================================

/*for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}*/

//What is the output? How closure helps here ?

/* Output :
Actual output : 5 5 5 5 5 
Expected Output: 0 1 2 3 4

The reason for this is that each function executed within the loop will be executed after the entire loop has completed 
and all will therefore reference the last value stored in i, which was 5.
Closures can be used to prevent this problem by creating a unique scope for each iteration, storing each unique value 
of the variable within its scope, as follows: */

/*for (var i = 0; i < 5; i++) {
	(function(x) {
    	setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}*/

// Output: 0 1 2 3 4 

//===============================================================================================================

console.log("0 || 1 = "+(0 || 1));      // 1
console.log("1 || 2 = "+(1 || 2));      // 1
console.log("0 && 1 = "+(0 && 1));      // 0
console.log("1 && 2 = "+(1 && 2));      // 2

/*
    In JavaScript, both || and && are logical operators that return the first fully-determined “logical value” when evaluated 
    from left to right.
 */

//===============================================================================================================

console.log(false == '0');      // true
console.log(false === '0');     // false

//===============================================================================================================

/*function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);*/

//The output will be 1

//===============================================================================================================

// For more output questions 
// https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z

//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
//===============================================================================================================
