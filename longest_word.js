
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


/* How They did */
function LongestWord2(sen) {
  // match is string func which uses regex and returns array of matches []
  // so this matches anything a-z 0-9
  var arr = sen.match(/[a-z0-9]+/gi);

  // sort is array func that takes param a b returns new array based on how you want it sorted
  // take the length of the next index minus the first. it will be negative if a is larger or positive if b is
  var sorted = arr.sort(function (a, b) {
    return b.length - a.length;
  });

  // this array now contains all the words in the original but long-short so just return the first

  return sorted[0];

}

LongestWord2("the $$$longest# word is coderbyte");   