

document.getElementById('submit').addEventListener('click', function (event) {
  var nbr1, nbr2, result;
  nbr1 = parseInt(document.getElementById('shoeSize').value);
  nbr2 = parseInt(document.getElementById('yearOfBirth').value);
  //test sur valeurs ...
  if (testNum(nbr1, nbr2)) { //si on a bien 2 nombres, on fait les calculs
    result = (nbr1 * 2 + 5) * 50 - nbr2 + 1770;
    //window.alert('Le resultat est : ' + result);

    //console.log(initial); (voir avec F12 )
    document.getElementById('paragraphResult').innerHTML =  " Résultat est égal à:" + result;
  } else {
    window.alert('Les données ne sont pas des nombres: ');
  }
  event.preventDefault(); //désactive les fonctions primaires du bouton 
}, false);
// voir https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault pour infos.


function testNum(x1, y1) {
 // let x1, y1; pas obligatoire...
  // En javascript la fonction isNaN() (pour Is Not A Number) permet de tester si une chaine de caractères est un nombre.
  if (isNaN(x1) == true) {
    alert("Cette pointure n'est pas un nombre");
    return false;
  } else {
    if (isNaN(y1) == true) {
      alert("Cette année n'est pas un nombre");
      return false;
    } else {
      return true;
    }
  }
}