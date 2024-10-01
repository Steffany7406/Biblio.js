var a = 9
var b = 27

function gcd(a, b) {
    var R;
    while ((a % b) > 0)  {
      R = a % b;
      a = b;
      b = R;
    }
    return b;
  }
  