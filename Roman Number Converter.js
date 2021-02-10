function convertToRoman(num) {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanValue = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var romanized = "";


    for (var i = 0; i < decimalValue.length; i++) {
        while (decimalValue[i] <= num) {
        romanized += romanValue[i];
        num -= decimalValue[i];
        }
    }

  return romanized;
}