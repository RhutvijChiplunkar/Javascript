var x="abcd";
console.log(x.length);
console.log("This is 'JS' language");
console.log('This is "JS" language');
//escape characters --> / is used as escape character
console.log('This is \."JS" language');
console.log('This is \\ "JS" language');
console.log("This is \"JS\" language");

// String as an object
var y=new String("Web development");
console.log(typeof y)

var x="Web development";
/* vaalue is same but data type is different
 Note the difference between (x==y) and (x===y).
Also note that comparing two JavaScript objects will always return false.*/
console.log(y==x);
console.log(y===x);

// String methods
var a="Javascrit is the most popular language in the world!"
console.log(a.length);                  //returns length of string
console.log(a.indexOf("popular"));      //returns location of first letter
console.log(a.lastIndexOf("popular")); 
console.log(a.lastIndexOf("India")); 
console.log(a.indexOf("popular",20));       //search starts from 20th char
console.log(a.search("most"));              //returns index if found else -1

//Extracting string from string
console.log(a.slice(10,21));            //accept positive as well as negative
console.log(a.slice(-15,-1));
console.log(a.substring(5,12));         //only accepts positive, here 5th-11th position
console.log(a.substr(5,10))              //***second parameter is length */
console.log(a.substr(-4))               //counts from end

// replace
console.log(a.replace("the world!","2020"));

//upper and lower cases
console.log(a.toLowerCase());
console.log(a.toUpperCase())
var b="Rhutvij",c="Chiplunkar";
console.log(b.concat(" ",c));

var d="          India         ";
console.log(d.trim());          //remove all white spaces from both sides       

//padStart and padEnd to support padding at the beginning and at the end of a string.
let e="5",f="5";
e=e.padStart(4,0);          //total 4 characters, 0 at remaining places
console.log(e);
f=f.padEnd(5,0);            //total 5 characters, 0 at remaining places
console.log(f);

//Extracting string characters
console.log(a.charAt(20));          //returns character
console.log(a.charCodeAt(20));      //returns unicode of character 
//property access
console.log(a[0]);                  //similar to python

//splitting of string in array
var v="World";
var w=v.split("");
console.log(w[0]);



//******* JS NUMBERS *********/
//JavaScript will try to convert strings to numbers in all numeric operations(except "+")
var p="900";
var q="45";
var r=p/q;
var s="chips",t=50;
console.log(r);
console.log(t/s);           //op is NaN-->not a number
console.log(typeof NaN);    //returns number

/*Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside 
the largest possible number */
var x=100/0,y=-1/0;
console.log(x+" "+y);

// after max value, it will give infinity
var num=3;
while(num!=Infinity){
    num=num**2;
    console.log(num);
}

//numbers preceded by 0x are hexadecimal
//***** use toString(base) to get number in required number system */

function NumConversions(){
    var x=32;

    document.getElementById('a').innerHTML="To the base 32: "+x.toString(32);
    document.getElementById('b').innerHTML="To the base 16: "+x.toString(16);
    document.getElementById('c').innerHTML="To the base 10: "+x.toString(10);
    document.getElementById('d').innerHTML="To the base 8: "+x.toString(8);
    document.getElementById('e').innerHTML="To the base 2: "+x.toString(2);
}       

//numbers as an object
var z=new Number(123);
console.log(z*2);

//number methods
var a=123;  
console.log(a.toString())       //number to string
console.log((100+849).toString())
var b=5.265;
console.log(b.toExponential(2));        //returns in exponent form, in brackets->numbers behind decimal
console.log((1000000000).toExponential(4)); 
console.log((0.0000000001).toExponential(5)); 

//toFixed() returns a string, with the number written with a specified number of decimals:
//toPrecision() returns a string, with a number written with a specified length:
var c=8.5264, d=896.324;
console.log(c.toPrecision(7));
console.log(d.toFixed(2));

//valueOf() returns a number as a number.
console.log(("abc").valueOf());
console.log((758**2).valueOf());

/*There are 3 JavaScript methods that can be used to convert variables to numbers:
The Number() method
The parseInt() method
The parseFloat() method
*/
console.log(Number("   8524    "));     //returns number else NaN

//Number() can also convert a date to a number
//The Number() method above returns the number of milliseconds since 1.1.1970.
var dt=new Date("2021-03-04");
console.log(Number(dt)); 

//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned
console.log(parseInt("23.5"));
console.log(parseInt("1760 days and 40 hours"));
//parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
console.log(parseFloat("20.365 jpeh"));

//parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);