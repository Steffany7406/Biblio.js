var a = 9
var b = 27

function gcd(a, b) { //  function to calculate GCD
    var R;
    while ((a % b) > 0)  {  // while remainder is not zero
      R = a % b;
      a = b;
      b = R;
    }
    return b; 
  }
  // Para rodar o  código, você pode usar o console.log(gcd(a, b)) ou console.log(gcd(9, 27))
