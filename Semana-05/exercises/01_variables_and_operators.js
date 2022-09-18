console.log('--EXERCISE 01: VARIABLES AND OPERATORS');
/*  Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de
    ambos números en una 3er variable.  */
console.log('\n-Exercise 1.a: ');
var firstNumber, secondNumber, sumTotal;
firstNumber = 10;
secondNumber = 5;
sumTotal = firstNumber + secondNumber;
console.log(sumTotal);
/*  Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.  */
console.log('\n-Exercise 1.b: ');
var firstString, secondString, concatenation;
firstString = 'Ho';
secondString = 'la';
concatenation = firstString + secondString;
console.log(concatenation);
/*  Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del
    string) guardando el resultado de la suma en una 3er variable (utilizar length).    */
console.log('\n-Exercise 1.c: ');
var thirdString, fourthString, totalLenght;
thirdString = 'Hola';
fourthString = 'Mundo';
totalLenght = length(thirdString) + length(fourthString);
console.log(totalLenght);