
/* How I Solved */
function LongestWord(sen) {
  var longestString = " ";
  sen = sen.replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, " ")
  sen = sen.split(" ");
  for (var i = 0; i < sen.length; i++) {
    if (sen[i].length > longestString.length) {
      longestString = sen[i];
    }
  }

  // code goes here  
  return longestString;

}
LongestWord("?Meow kitty cool@pumpkin*&@patchma/dn? sup okay$@"); // pumkin


/* How they solved  */
function LongestWord2(sen) {

  var arr = sen.match(/[a-z0-9]+/gi);

  // the array sort function takes a function as a parameter
  // which is used to compare each element in the array to the
  // next element in the array
  var sorted = arr.sort(function (a, b) {
    return b.length - a.length;
  });

  // this array now contains all the words in the original
  // string but in order from longest to shortest length
  // so we simply return the first element
  return sorted[0];

}

LongestWord2("the $$$longest# word is coderbyte");   