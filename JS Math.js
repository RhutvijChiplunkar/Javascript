function MathConstants(){
    document.getElementById('a').innerHTML=
    "<p><b>Math.E:</b> " + Math.E + "</p>" +
    "<p><b>Math.PI:</b> " + Math.PI + "</p>" +
    "<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +
    "<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +         //1 by root2
    "<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +
    "<p><b>Math.LN10:</b> " + Math.LN10 + "</p>" +
    "<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +
    "<p><b>Math.Log10E:</b> " + Math.LOG10E + "</p>";
}

//Important mathematical methods
console.log(Math.round(39.875));
console.log(Math.floor(39.875));
console.log(Math.ceil(39.875));
console.log(Math.trunc(39.875));        //returns integer part

//retuns sign of number
console.log(Math.sign(-8));
console.log(Math.sign(0));
console.log(Math.sign(8));

console.log(Math.pow(84,3));
console.log(Math.sqrt(81.01));
console.log(Math.abs(-9.65));       //returns mod value

//trignometry
console.log(Math.sin(90*Math.PI/180));
console.log(Math.cos(-180*Math.PI/180));
console.log(Math.acos(0)*180/Math.PI);
console.log(Math.asin(1)*180/Math.PI);

//max and min
console.log(Math.max(10,20,65,11,20,32));
console.log(Math.min(10,20,65,11,20,32));

//logarithms
console.log(Math.log2(8));
console.log(Math.log(Math.E));
console.log(Math.log10(100));

//random number generation
console.log(Math.random());         // any no between 0 to 1
console.log(Math.floor(Math.random()*10))       //no betn 0 to 9

//general function
function RandomNum(min,max){
    console.log(Math.floor(Math.random()*(max-min+1)+min));
}