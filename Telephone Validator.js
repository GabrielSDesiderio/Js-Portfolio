//Return true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
    //test using regex if the number is in US Format
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
  }