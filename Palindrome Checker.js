function palindrome(str) {
    var palin = [];
    var regex = /[a-z0-9]/ig;
    var stri = str.match(regex);
    for(let i = stri.length - 1; i >= 0; i--) {
      palin.push(stri[i])
    }
    stri = stri.join('');
    palin = palin.join('');
  
    return palin.toLowerCase() == stri.toLowerCase();
  }