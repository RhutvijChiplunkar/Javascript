//arrow functions
var intro=()=>{
    //return "Hello. This is arrow function";
    document.getElementById('a').innerHTML="Hello. This is arrow function";
}

/* If the function has only one statement, and the statement returns a value, 
you can remove the brackets and the return keyword: */
var add=(a,b)=>(a+b);
console.log(add(5,10));

var sub=(a,b)=>(a-b);
console.log(sub(5,10));

var mul=(a,b)=>(a*b);
console.log(mul(5,10));

/* Functions stored in variables do not need function names. 
They are always invoked (called) using the variable name. */
var x=function(a,b,c){
    return (a*b-c);
}
console.log(x(9,9,1));

/* Self-Invoking Functions
Function expressions can be made "self-invoking".
A self-invoking expression is invoked (started) automatically, without being called.
Function expressions will execute automatically if the expression is followed by ().
You cannot self-invoke a function declaration.
You have to add parentheses around the function to indicate that it is a function expression */
(function a(){
    console.log("Self invoking function, without function call");
})();

//The arguments.length property returns the number of arguments received when the function was invoked:
function myFunction(a, b) {
    return arguments.length;
}
console.log("Arguments received ::" + myFunction(5,10));


/* The Arguments Object
JavaScript functions have a built-in object called the arguments object.
The argument object contains an array of the arguments used when the function was called (invoked) */

function MaxNo(){
    MAX=-Infinity;
    for(var x=0;x<arguments.length;x++){
        if(MAX<arguments[x]){
            MAX=arguments[x];
        }
    }
    return MAX;
}
console.log(MaxNo(5,48,999,85,7465,333,1245));

/* The JavaScript call() Method
The call() method is a predefined JavaScript method.
It can be used to invoke (call) a method with an owner object as an argument (parameter).
With call(), an object can use a method belonging to another object. 

The Difference Between call() and apply()
The difference is:
The call() method takes arguments separately.
The apply() method takes arguments as an array.*/

var Student={
    fullName: function() {
        return this.name + " " + this.surname;
      }
}

var s1={
    name:"Rhutvij",
    surname:"Chiplunkar"
}
var s2={
    name:"Sachin",
    surname:"Kulkarni"
}

console.log(Student.fullName.call(s1));
console.log(Student.fullName.call(s2));

console.log(Student.fullName.apply(s1));
console.log(Student.fullName.apply(s2));

/* Variables created without a declaration keyword (var, let, or const) are always global, 
even if they are created inside a function. */

/* JavaScript Nested Functions
All functions have access to the global scope.  
In fact, in JavaScript, all functions have access to the scope "above" them.
JavaScript supports nested functions. Nested functions have access to the scope "above" them.
 */

function add(){
    var x=0;
    function plus(){
        x=x+1;
    }
    plus();
    return x;
}

//op is NaN
console.log(add());
console.log(add());

//JavaScript Closures

var add=(
    function(){
    var x=0;
    return function (){
        x+=1;
        return x;
    }
})();
/* 
//Op is 1,2,3,4....
console.log(add());
console.log(add());
console.log(add());
console.log(add());
 */
function Increment(){
    document.getElementById('b').innerHTML=add();
}


var sub=(
    function(){
        var y=100;
        return function(){
            y=y-1;
            return y;
        }
})();

function Decrement(){
    document.getElementById('c').innerHTML=sub();
}