//Declaring Arrays in JS
var a=["abc","def","ghi"];
var b=new Array("pq","r","s");

//accessing elements
console.log(a[0]);
b[0]="xy";
console.log(b[0]);
console.log(a);

//array as objects
var arr={a:"rhutvij",b:"chips"};
console.log(arr.a);
console.log(arr['b']);


function A(){
    console.log(Date.now);
}
function B(){
    console.log("Func B called");
}
function C(){
    console.log("Func C called");
}

//looping along arrays
function loop(){
    var x=[5,10,95,84,45,63];

    text="<ul>"
    for(var i=0;i<x.length;i++){
        text+="<li>"+x[i]+"</li>"
    }
    text += "</ul>";
    document.getElementById('a').innerHTML=text;
}

/*
*********FOR EACH IN ARRAYS********
//in html
var nums,txt;
nums=[5,48,98,62,51,33];
txt="<ul>"
nums.forEach(func);
txt+="</ul>"
document.getElementById('b').innerHTML=txt;

function func(value){
    txt+="<li>"+value+"</li>";
}
*/

//adding array elements
var y=[11,22,33,44,55];
y[y.length]=66;         //to be used cautiosly as it can create holes
console.log(y[y.length-1]);
y.push(77);
console.log(y);
console.log(typeof y);          //returns object

//check if array or not
var z=4;
console.log(Array.isArray(y));      //returns true
console.log(Array.isArray(z));      //returns false

console.log(y instanceof Array);       //returns true


//ARRAY METHODS

var A=["abc","def","ghi"];
console.log(A.toString())       //converts to string
console.log(A.join('_'));       //splits elements and joins by parameter
A.pop();         //removes last
A.push("pqr");  //add to end
console.log(A[A.length-1]);
A.shift();      //removes first
console.log(A[0]);
A.unshift("abc");       //add to first posn
console.log(A[0]);

//changing and adding elements
A[2]="xyz";
A[A.length]="wvx";
console.log(A.toString());
delete A[2];        //holes remain so not advisable;
console.log(A[2]);      //returns undefined

//splice method
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,0,"cashew","jamun");
console.log(fruits);

fruits.splice(2, 2, "Lemon", "Kiwi");           //deletes 2(2nd parameter)
console.log(fruits);

fruits.splice(2,1);                         //add 0 delete 1
console.log(fruits);

//concatenation of arrays 
var no1=[5,6,7];
var no2=[8,9,10];
var no3=[10,11,12];
var nos=no1.concat(no2);
console.log(nos);           //merges 2 arrays

var nums=no1.concat(no2,no3);       //can contain any no of parameters
console.log(nums);

//SORTING IN ARRAYS
console.log(fruits.sort());
console.log(fruits.reverse());

//SORTING OF NUMBERS
var N=[5,98,67,49,111,231,54,2];
var Na=N.sort(function(a,b){ return a-b });     //ascending
console.log(Na);
var Nd=N.sort(function(a,b){ return b-a });     //ascending
console.log(Nd);

//sorting array in random order
console.log(N.sort(function(a,b){ return 0.5-Math.random()}))

//Sorting object arrays numbers
var obj=[
    {name:"a",age:25},
    {name:"b",age:75},
    {name:"c",age:5},
    {name:"d",age:12}
]
var w=obj.sort(function(a,b){return a.age-b.age});
console.log(w);

//Iterations in JS
//in HTML file

/******MAP IN JS **************
Array.map()
The map() method creates a new array by performing a function on each array element.
The map() method does not execute the function for array elements without values.
The map() method does not change the original array.*/

var arr1=[8,6,5,9,4,2,3];
var arr2=arr1.map(MapFunc);

function MapFunc(value,index,array){
    return value**2;
}
console.log(arr2);

/* Array.filter()
The filter() method creates a new array with array elements that passes a test.*/

var arr3=[5,10,18,59,64,85,100,23,25,95];
var arr4=arr3.filter(FilterFunc);
console.log(arr4);

function FilterFunc(value,index,array){
    return value%5==0;
}

/*
Array.reduce()
The reduce() method runs a function on each array element to produce (reduce it to) a single value.
The reduce() method works from left-to-right in the array. See also reduceRight().*/

var arr5=[10,20,30,40,50];
var arr6=arr5.reduce(ReduceFunc);
console.log(arr6);

var arr6=arr5.reduce(ReduceFunc1);
console.log(arr6);

function ReduceFunc(total,value,index,array){
    return total+value;
}

function ReduceFunc1(total,value,index,array){
    return total*value;
}

var arr7=[2,3,6,5,4];
var arr8=arr7.reduceRight(ReduceRFunc,100);     //carries out operations from right, 1st parameter is also considered
console.log(arr8);

function ReduceRFunc(x,value,index,array){
    return x+value;                             //returns value also considering 100
}

/*Array.every()
The every() method check if all array values pass a test.
returns TRUE or FALSE

Array.some()
The some() method check if some array values pass a test.
*/

var arr9=[74,8,99,65,15,24,58,66];
var arr10=arr9.every(EveryFunc);
console.log(arr10);

var arr10=arr9.every(EveryFunc1);
console.log(arr10);

var arr10=arr9.some(SomeFunc);
console.log(arr10);

function EveryFunc(value,index,array){
    return value>5;
}
function EveryFunc1(value,index,array){
    return value<4;
}
function SomeFunc(value,index,array){
    return value<14;
}

/*Array.find()
The find() method returns the value of the first array element that passes a test function

Array.findIndex()
The findIndex() method returns the index of the first array element that passes a test function.
*/
var arr11=[4,5,99,88,77,44,55,66,1];
var arr12=arr11.find(FindFunc);
console.log(arr12);
function FindFunc(value){
    return value>55;
}

var arr12=arr11.findIndex(FindIndexFunc);
console.log(arr12);

function FindIndexFunc(value){
    return value>45;
}

//array of objects
var arrobj=[
    {
        id : 25,
        name: 'abc',
        age:45
    },
    {
        id : 48,
        name: 'pqr',
        age:28
    },
    {
        id : 78,
        name: 'xyz',
        age:4
    }
]

console.log(arrobj);
console.log(arrobj[0].age);
console.log(arrobj[1].name);

for(let k of arrobj){
    console.log(k);
}

arrobj.forEach(function(obj){
    console.log(obj.id);
});

const arrName=arrobj.map(function(obj){
    return obj.name;
});

console.log("The names are:"+arrName);