/* What Is a Regular Expression?
A regular expression is a sequence of characters that forms a search pattern.
When you search for data in a text, you can use this search pattern to describe what you are searching for.
A regular expression can be a single character, or a more complicated pattern.
Regular expressions can be used to perform all types of text search and text replace operations. 

syntax::
/pattern/modifiers;


*/

"use strict" 
/*You can use strict mode in all your programs. 
It helps you to write cleaner code, like preventing you from using undeclared variables.
Strict mode changes previously accepted "bad syntax" into real errors.
The "use strict" directive is only recognized at the beginning of a script or a function. */
function NormalSearch(){
    var x="Javascript is a modern language"
    var y=x.search("modern");
    document.getElementById('a').innerHTML='Index of word is '+y;
}

function RegexSearch(){
    var x="Javascript is a modern language"
    var y=x.search(/modern/i);                  //search modern case in-sensitive
    document.getElementById('b').innerHTML='Index of word is '+y;
}

function RegexReplace(){
    var x=document.getElementById('c').innerHTML;
    var y=x.replace(/College/i ,"Online");
    document.getElementById('c').innerHTML=y;
}

//matching multiple occurences
function RegexGlobalMatch(){
    var x="India is a huge country. It is one of the most popular country";
    var y=x.match(/is/g);
    document.getElementById('d').innerHTML=y;       //op--> is,is (number of occurences)
}

//multiline Match
function MultiLineMatch(){
    var x="India is\n a huge country. It\n is one of the most\n popular country";
    var patt=/^is/m;
    var y=x.match(patt);
    document.getElementById('e').innerHTML=y;
}
/* 
Regular Expression Patterns
Brackets are used to find a range of characters:
Expression	Description	Try it
[abc]	Find any of the characters between the brackets	
[0-9]	Find any of the digits between the brackets	
(x|y)	Find any of the alternatives separated with | 
*/

var str1="Welcome to india"
var x1=str1.match(/[i]/g);
console.log(x1);

var str2="29584798745213884689"
var x2=str2.match(/[9]/g);
console.log(x2);

var str3="x,y,a,b,c,x,z,y"
var x3=str3.match(/[x|y]/g);
console.log(x3);

/* \d	Find a digit	
\s	Find a whitespace character	
\b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
\uxxxx	Find the Unicode character specified by the hexadecimal number xxxx */

var str4="india 44/2 kohli 5(22) rahul 8(10)"
var x4=str4.match(/\d/g);
console.log(x4);                //op are numbers

var str5="india 44/2 kohli 5(22) rahul 8(10)"
var x5=str5.match(/\s/g);
console.log(x5);                //op are number of spaces -> 5

var str6="india 44/2 kohli 5(22) rahul 8(10) from india"
var x6=str6.search(/ia\b/g);
console.log("found at " +x6);     // returns 3        
var x7=str6.search(/\bi/g);
console.log("found at " +x7);     // returns 0            

//unicode character
var str = "Visit W3Schools. Hello World!"; 
var patt1 = /\u0057/g;
var result = str.match(patt1);
console.log(result);        //array of "W"

/* Quantifier	
Quantifiers define quantities:
n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n */

var str7="Welcome to india. we are indians"
var x7=str7.match(/i+/g);       //occurence of mre than 1 "i"
console.log(x7);

//"l", followed by zero or more "o" characters.
var str8 = "Hellooo World! Hello W3Schools!"; 
var x8 = str.match(/lo*/g);
console.log(x8);

//"1", followed by zero or one "0" characters.
var str9="1 10 100 or 1000";
var x9=str9.match(/100?/g);
console.log(x9);

/* Using test()
The test() method is a RegExp expression method.
It searches a string for a pattern, and returns true or false, depending on the result. */

var str10="hello everyone";
var x10=/ev/.test(str10);
console.log(x10);       //returns true

/* Using exec()
The exec() method is a RegExp expression method.
It searches a string for a specified pattern, and returns the found text as an object.
If no match is found, it returns an empty (null) object. */

var str11="hello hi all";
var x11=/o/.exec(str11);
console.log(x11);   

/* OUTPUT
 0: "o"
groups: undefined
index: 4
input: "hello hi all"
length: 1 */

//JS errors-->try..catch...finally
try{
    allert("try block");
}
catch(error){
   console.log("Catch executed");
}

//throw
var x=11;

try{
    if(x==8){
        throw "Eight"
    }
    else{
        throw "Not eight"
    }

}
catch(error){
    console.log("The number is: "+error);
}
finally{
    console.log("Try..Catch excuted");
}

var abc="ebilvu vv nwpvh ";
var xyz=100;
console.log(abc);
debugger;           //execution stops here
console.log(xyz);