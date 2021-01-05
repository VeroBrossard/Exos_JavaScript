

document.getElementById('submit').addEventListener('click', function(event) {event.preventDefault(); //désactive les fonctions primaires du bouton 
    var nbr1, nbr2, reste;
    nbr1 = Number(document.getElementById('firstNumber').value);
    nbr2 = Number(document.getElementById('secondNumber').value);
    //test sur valeurs ...
    reste = (nbr1 % nbr2);    // Ta variable à arrondir 
    reste = reste.toFixed(2);  //r'enverra xx,xx
    document.getElementById('paragraphResult').innerHTML ="le résultat est égal à:" + reste ;
}, false);
// voir https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault pour infos.
    
    
    // function reste(e) { 
    //  // fonction pour bloquer le rechargement de la page 
    //   e.preventDefault();
    //   var nbr1, nbr2, reste;
    //   nbr1 = Number(document.getElementById('firstNumber').value);
    //   nbr2 = Number(document.getElementById('secondNumber').value);
    //   reste = (nbr1 % nbr2);    // Ta variable à arrondir 
    //   reste = reste.toFixed(2);  //r'enverra xx,xx
    //   // window.alert('Le reste de cette division  est : ' + reste);
    //   document.getElementById('paragraphResult').innerHTML ="le résultat est égal à:" + reste ;
    // }

    
    
// Dans une division euclidienne (a/b), le produit du quotient (q) et du diviseur (b) plus le reste  (r) est égal au dividende (a) , et le reste est un entier naturel strictement inférieur au diviseur.  (r = a-qb) ou (a= qb+r)

//     Comment calculer une division avec un nombre à virgule ?
// Une division euclidienne est une division entière, il n'est pas sensé y avoir de virgule.

// Cependant, si le diviseur ou le dividende à une virgule, il est possible de les multiplier par 10 le dividende et le diviseur autant de fois que nécéssaire pour la faire disparaitre.