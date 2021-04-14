function DateNow(){
    var d=new Date()
    document.getElementById('b').innerHTML=d;
}

/*
 JavaScript counts months from 0 to 11.
January is 0. December is 11.*/

//new Date(dateString);
console.log(new Date("March 8, 2021 16:06:84"));
console.log(new Date(0));

//JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00
// +ve-->after , -ve-->before
console.log(new Date(-1809806000));
console.log(new Date(1809806000));

//The toUTCString() method converts a date to a UTC string (a date display standard).
var dt=new Date();
console.log(dt.toUTCString());      //In GMT
//The toISOString() method converts a date to a string, using the ISO standard format:
console.log(dt.toISOString());

//Short dates are written with an "MM/DD/YYYY" syntax like this:
var date=new Date("03/08/2021");
var date1=new Date("03-08-2021");
console.log(date);
console.log(date1);

/*Date Input - Parsing Dates
If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
Date.parse() returns the number of milliseconds between the date and January 1, 1970:*/

var dte=Date.parse("March 8, 2021");
console.log(dte);               //in seconds
var d=new Date(dte);
console.log(d);                 //date 

//Date GET methods
console.log("Date GET methods");   
var dateGet=new Date();
console.log(dateGet.getFullYear());         //get year as 4 digit number
console.log(dateGet.getMonth());            //number from 0-11 as jan-dec
console.log(dateGet.getDate());             //number from  1-31 as date
console.log(dateGet.getDay());              //week day from 0-6 as sunday-saturday
console.log(dateGet.getHours());            //current hour in 24 hr system
console.log(dateGet.getMinutes());          //current minutes system     
console.log(dateGet.getSeconds());          //current second system
console.log(dateGet.getMilliseconds());     //current millisecond
console.log(dateGet.getTime());             //millisecond since jan 1 1970


//Date SET methods
console.log("Date SET methods");   
var dateSet=new Date();                        //input below values
console.log(dateSet.setFullYear(2000));         //year as 4 digit number
console.log(dateSet.setMonth(11));            //number from 0-11 as jan-dec
console.log(dateSet.setDate(15));             //add days to existing date
console.log(dateSet.setHours(3));            //current hour in 24 hr system
console.log(dateSet.setMinutes(10));          //current minutes system     
console.log(dateSet.setSeconds(30));          //current second system
console.log(dateSet.setMilliseconds(500));     //current millisecond
//console.log(dateSet.setTime());             //millisecond since jan 1 1970



