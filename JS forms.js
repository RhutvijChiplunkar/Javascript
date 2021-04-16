function ValidateForm(){
    var x=document.forms["Login_form"]["fname"].value;
    if(x==""){
        alert("Please type name!");
        return false;
    }
}

function ValidNum(){
    var x=document.getElementById("nums").value;
    var txt;
    if(isNaN(x) || x<35 || x>100){
        txt="Please type number between 35 and 100";
    }
    else{
        txt="input correct";
    }
    document.getElementById('msg').innerHTML=txt;
}

function myFunction() {
    var txt = "";
    if (document.getElementById("id1").validity.rangeOverflow) {
      txt = "Value too large";
    } else {
      txt = "Input OK";
    } 
    document.getElementById("OF").innerHTML = txt;
  }

  function myFunction1() {
    var txt = "";
    if (document.getElementById("id2").validity.rangeUnderflow) {
      txt = "Value too small";
    } else {
      txt = "Input OK";
    } 
    document.getElementById("UF").innerHTML = txt;
  }