// JS booleans
console.log(Boolean(10>8));
//Everything With a "Value" is True, Everything Without a "Value" is False
console.log(Boolean("abc"));
var x;
console.log(Boolean(x));
//booleans as object
var a=new Boolean(true);
var b=true;
console.log(a==b);
console.log(a===b);

//ternary operators
var c=21;
var w=(c>28)?"True":"False";
console.log(w);

//condtitional statements

var a=100,b=50;

if(a>b){
    console.log("a greater");
}
else{
    console.log("b greater");
}

var x=40;
if(x<10){
    console.log("x less than 10")
}
else if(x<20){
    console.log("x less than 20")
}
else {
    console.log("x more than 20")
}

//switch statements

var x=new Date().getDay();
switch(x){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
    case 3:             //same op for multiple cases
    case 4:
    case 5:
        console.log("Not aMonday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Week days seen");
}

// FOR LOOPS IN JS
var A=[5,10,15,20,65,64];
for(var i=0;i<A.length;i++){
    console.log(A[i]);
}

//For-in loops
for(i in A){
    console.log(A[i]);
}
var txt="";
var ob={first:"name",last:"surname",city:"city"};
for(i in ob){
    txt+=ob[i]+" ";
}
console.log(txt);

//For-of loops
var B=["z","b","c","d","e"];
for(let x of B){
    console.log(x);
}

//while and do-while

var i=1;
while(i<5){
    console.log(i);
    i++;
}
//i is 5 here
do{
    console.log(i);
    i++;
}while(i<=10);

//break and continue with label
var A=[5,10,15,20,65,64,12,1];
txt:{       //txt is label
    console.log(A[0]);
    console.log(A[1]);
    console.log(A[2]);
    //continue txt;
    console.log(A[3]);
    break txt;
}

/*The constructor Property
The constructor property returns the constructor function for all JavaScript variables.*/
console.log(("abc").constructor);
console.log((5).constructor);
console.log(([1,2,3]).constructor);
console.log((false).constructor);
console.log((new Date()).constructor);
console.log(function(){}.constructor);
console.log({a:'1',b:"b"}.constructor);

//type conversions
console.log(String(100+154.4));
console.log((false).toString().toUpperCase());
//to number
console.log(Number("458")*2);
console.log(Number(true));

//Bitwise operators
console.log(2 & 6);
console.log(2 | 6);
console.log(2 ^ 6);
console.log(5<<1);
console.log(5>>1);
