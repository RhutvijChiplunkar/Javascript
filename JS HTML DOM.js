document.write("written by JS");
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByClassName("Head2"));

var x=document.getElementById('a');
console.log(x);


/* Finding HTML Elements by CSS Selectors
If you want to find all HTML elements that match a specified CSS selector (id, class names, 
types, attributes, values of attributes, etc), use the querySelectorAll() method. */

function fun(){
    var x=document.querySelectorAll("p.para");
    document.getElementById("a").innerHTML = "Inner html of x[0] is::" +x[0].innerHTML;
};

/* Changing the Value of an Attribute
document.getElementById(id).attribute = new value */


function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}


function mOver(obj) {
    obj.innerHTML = "Changed on hover";
    obj.style.backgroundColor="black";
}
  
	