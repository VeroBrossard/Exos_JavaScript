
let inputLastname = document.getElementById("lastname");

function showMsg(message){
  window.alert(message);
}

inputLastname.addEventListener('keyup',function () 
{
  showMsg(inputLastname.value);

  }, false);





// document.getElementById("lastname").style.backgroundColor = "yellow";
// document.getElementById('lastname').addEventListener('keyup',function () {
//   var name
//   name = document.getElementById('lastname').value;
//   //nbr2 = Number(document.getElementById('yearOfBirth').value);
  
//   window.alert('Bonjour ' + name);
//   }, false);


//keyup i/o keypress ou keydown pour que la valeur tapée soit prise en compte dans la var name.



// document.getElementById("lastname").addEventListener("keypress", myFunction);

// function myFunction() {
//   document.getElementById("lastname").style.backgroundColor = "red";
// }

//exemple sur 
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeypress_addeventlistener
// voir https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault pour infos.
