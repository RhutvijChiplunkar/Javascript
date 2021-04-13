
//single line comment
/*multi-line
comment */ 
function variables(){
    var a="string is stored";   
    var b=5;
    var c=8.56
    var d=(8*10)+6;
    var e;      //if only declared, value is undefined 
    var f="4"+1+8;      //f you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
    document.getElementById('f').innerHTML="String: "+a +", integer: "+b+",Float :"+c+",Expression value: "+d +"Value of e:"+e;
}

/*
var
Variables declared with the var keyword cannot have Block Scope.
Variables declared inside a block {} can be accessed from outside the block.
let
Variables declared with the let keyword can have Block Scope.
Variables declared inside a block {} cannot be accessed from outside the block:

var x=4;
function LetVar(){
    let x=2;
    document.getElementById('g').innerHTML=x;       //value will be 2
}
document.getElementById('g').innerHTML=x;           //value will be 4
*/

/* var and let in loops
In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.
In the second example, using let, the variable declared in the loop does not redeclare the variable outside 
the loop.

Global variables defined with the var keyword belong to the window object:
Global variables defined with the let keyword do not belong to the window object:
*/
function VAR(){
var i=0;
for(var i=0;i<10;i++){

}
document.getElementById('g').innerHTML=i;   //i is 10
}
function LET(){
let i=5;
for(let i=0;i<=10;i++){

}
document.getElementById('h').innerHTML=i;   //i is 5
}

/* hoisting--> variable declared after it is used
x=10;
document.getElementById('#').innerHTML=x;
var x;
*/

/* const keyword
JavaScript const variables must be assigned a value when they are declared
You can change the properties of a constant object
Using a const variable before it is declared, is a syntax errror, so the code will simply not run,
it can be used after declaration
*/
function CONST(){
    const a=100;    //cannot be changed
    x="abcd"
    //const x;          not allowed**
    document.getElementById('i').innerHTML=x;       //dont output anything
}

/* ***********IMPORTANT*********
===	equal value and equal type
!==	not equal value or not equal type
*/


console.log(10**2);
console.log(Math.pow(20,4));

//variable as object 
var x={first:"Rhutvij",last:"chiplunkar"};
console.log(x.first)

/*JavaScript has only one type of numbers.
Numbers can be written with, or without decimals*/
var x=35.26;
var y=35;

/* JS boolean
returns true or false*/
var a=4,b=8,c=8,d="abc",e,k=true;
var f=null;
var g=["a","b","c"];
var h={first:"rhutvij",
        age:20,
        last:"chiplunkar",
        city:"kolhapur",
        //function as an element
        fullName:function(){
            return this.first+ " "+this.last;
        }
    };
console.log(a==b);
console.log(b==c);
console.log(typeof(a))
console.log(typeof(d))
console.log(typeof(e))
console.log(typeof(k))
console.log(typeof(g))      //op:- object
console.log(typeof(f))      //type off null is an object
console.log(typeof function myFunc(){})      //op:- function

//undefined and null are equal in value but different in type:
console.log(null==undefined);
console.log(null===undefined);

function Fun(a,b){
    return a*b;
}
console.log(Fun(20,5));
//Accessing a function without () will return the function object instead of the function result.
console.log(Fun);

//accessing elements from object
console.log(h['first']);
//  OR
console.log(h.first);
console.log(h.fullName())   //access functions
console.log(`My name is ${h.fullName}`)         //template string