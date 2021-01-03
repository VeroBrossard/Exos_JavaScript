

    function reste() {
      var nbr1, nbr2, reste;
      nbr1 = Number(document.getElementById('firstNumber').value);
      nbr2 = Number(document.getElementById('secondNumber').value);
      reste = (nbr1 % nbr2);
      alert('Le reste de cette division  est : ' + reste);
    }
