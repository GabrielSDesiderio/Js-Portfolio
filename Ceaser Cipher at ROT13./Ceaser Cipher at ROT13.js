//Write a function which takes a ROT13 encoded string as input and returns a decoded string.
function rot13(str) {
  var charArray = [];
  var regExp = /[A-Z]/;
  str = str.split("");
        /* A more general approach, possible because of modular arithmetic and cyclic nature of rot13 transform*/
  for (var i in str) {
    if (regExp.test(str[i])) {
      charArray.push(((str[i].charCodeAt() - 65 + 13) % 26) + 65);
    } else {
      charArray.push(str[i].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, charArray);
  return str;
}
