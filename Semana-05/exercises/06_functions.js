console.log('--EXERCISE 06: FNCTIONS');
var n, m, sumTotal;
/*  Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
    resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.    */
console.log('\n-Exercise 6.a:');
function sumA(a, b) {
    return a + b;
}
n = Math.floor(Math.random() * 101);
m = Math.floor(Math.random() * 101);
sumTotal = sumA(n, m);
console.log('Sum:', sumTotal);
/*  A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
    de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN
    como resultado. */
console.log('\n-Exercise 6.b:');
function sumB(a, b) {
    if ((a - Math.floor(a) > 0) && (b - Math.floor(b) > 0)) {
        alert(a, 'and', b, 'have errors');
        return 'NaN';
    }
    else if (a - Math.floor(a) > 0) {
        alert(a, 'has an error');
        return 'NaN';
    }
    else if (b - Math.floor(b) > 0) {
        alert(b, 'has an error');
        return 'NaN';
    }
    else {
        return a + b;
    }
}
n = Math.random() * 10;
m = Math.random() * 10;
sumTotal = sumB(n, m);
console.log('Sum:', sumTotal);
/*  Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un
    número entero.  */
console.log('\n-Exercise 6.c:');
function validateInteger(a) {
    return (a - Math.floor(a) > 0);
}
n = Math.random() * 10;
console.log('Validation:', validateInteger(n));
/*  A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los
    números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido
    a entero (redondeado).  */
console.log('\n-Exercise 6.d:');
function sumD(a, b) {
    if (validateInteger(a) && validateInteger(b)) {
        alert(a, 'and', b, 'have errors');
        return Math.floor(a + b);
    }
    else if (validateInteger(a)) {
        alert(a, 'has an error');
        return Math.floor(a + b);
    }
    else if (validateInteger(b)) {
        alert(b, 'has an error');
        return Math.floor(a + b);
    }
    else {
        return a + b;
    }
}
/*  Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
    que todo siga funcionando igual.    */
console.log('\n-Exercise 6.e:');