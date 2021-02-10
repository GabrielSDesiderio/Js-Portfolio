function convertToRoman(num) {
    var decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanValue = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var romanized = "";


    for (var i = 0; i < decimalValues.length; i++) {
        while (decimalValues[i] <= num) {
        romanized += romanValue[i];
        num -= decimalValues[i];
        }
    }

  return romanized;
}