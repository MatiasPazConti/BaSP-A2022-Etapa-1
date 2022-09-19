console.log('--EXERCISE 02: ARRAYS');
/*  Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */
console.log('\n-Exercise 3.a:');
var monthsA = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
            "Noviembre", "Diciembre"];
console.log('Months:', monthsA[4], monthsA[10]);
/*  Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).  */
console.log('\n-Exercise 3.b:');
var monthsB = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
            "Noviembre", "Diciembre"];
console.log('Months in alphabetical order:', monthsB.sort());
/*  Agregar un elemento al principio y al final del array (utilizar unshift y push).    */
console.log('\n-Exercise 3.c:');
var monthsC = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
            "Noviembre", "Diciembre"];
monthsC.unshift('Month-Zero');
monthsC.push('Month-13th');
console.log('Modified months array:', monthsC);
/*  Quitar un elemento del principio y del final del array (utilizar shift y pop).  */
console.log('\n-Exercise 3.d:');
var monthsD = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
            "Noviembre", "Diciembre"];
monthsD.shift();
monthsD.pop();
console.log('Modified months array:', monthsD);
/*  Invertir el orden del array (utilizar reverse). */
console.log('\n-Exercise 3.e:');
var monthsE = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
            "Noviembre", "Diciembre"];
console.log('Reversed month array:', monthsE.reverse());
/*  Unir todos los elementos del array en un único string donde cada mes este separado por un guión -
    (utilizar join).    */
console.log('\n-Exercise 3.f:');
var monthsF = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
            "Noviembre", "Diciembre"];
console.log('String:', monthsF.join(' - '));
/*  Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice) */
console.log('\n-Exercise 3.g:');
var monthsG = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
            "Noviembre", "Diciembre"];
var monthsCopy = monthsG.slice(4, 11);
console.log('Months array copy:', monthsCopy);