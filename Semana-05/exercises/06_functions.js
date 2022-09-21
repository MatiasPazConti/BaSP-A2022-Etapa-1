console.log('--EXERCISE 06: FNCTIONS');
/*  Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
    resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.    */
console.log('\n-Exercise 6.a:');
function sumA(a, b) {
    return a + b;
}
var n = 15;
var m = 4.5;
var sumTotal = sumA(n, m);
console.log('15 + 4,5:', sumTotal);
/*  A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
    de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN
    como resultado. */
console.log('\n-Exercise 6.b:');
function sumB(a, b) {
    if ((a - Math.floor(a) > 0) || (b - Math.floor(b) > 0)) {
        alert('There is an error');
        return NaN;
    }
    else {
        return a + b;
    }
}
console.log('15 + 4:', sumB(15, 4));
console.log('15 + 4,5:', sumB(15, 4.5));
/*  Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un
    número entero.  */
console.log('\n-Exercise 6.c:');
function validateInteger(a) {
    return (a - Math.floor(a) == 0);
}
console.log('Validation of 4:', validateInteger(4));
console.log('Validation of 4.5:', validateInteger(4.5));
/*  A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los
    números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido
    a entero (redondeado).  */
console.log('\n-Exercise 6.d:');
function sumD(a, b) {
    if (validateInteger(a) && validateInteger(b)) {
        return a + b;
    }
    else {
        alert('There is an error');
        return Math.floor(a + b);
    }
}
console.log('6 + 4.5:', sumD(6, 4.5));
console.log('6 + 4:', sumD(6, 4));
/*  Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
    que todo siga funcionando igual.    */
console.log('\n-Exercise 6.e:');
function validateOrTrunc(a) {
    if (validateInteger(a)) {
        return a;
    }
    else {
        return Math.floor(a);
    }
}
function sumE(a, b) {
    return validateOrTrunc(a) + validateOrTrunc(b);
}
console.log('4.5 + 6:', sumE(4.5, 6));
console.log('4 + 6:', sumE(4, 6));