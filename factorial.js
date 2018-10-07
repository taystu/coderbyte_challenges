/* How I solved */
function FirstFactorial(num) {

  let total = 1;
  while (num > 0) {
    total = total * num;
    num--;
  }
  return total;

}
FirstFactorial(2); //2
FirstFactorial(3); //6

/* How they did */

function FirstFactorial2(num) {

  // similar just using a loop instead if i is 1 then loop ends
  // 

  var factorial = 1;

  for (var i = 1; i <= num; i++) {
    // multiply each number between 1 and num  
    // factorial = 1 * 1 = 1
    // factorial = 1 * 2 = 2
    // factorial = 2 * 3 = 6
    // factorial = 6 * 4 = 24
    // ...
    factorial = factorial * i;
  }

  return factorial;

}

FirstFactorial2(4);      