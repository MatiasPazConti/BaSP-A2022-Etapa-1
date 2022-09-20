console.log('--EXERCISE 05: FOR');
/*  Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
    una alerta utilizando cada una de las palabras. */
console.log('\n-Exercise 5.a:');
var array = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
var toDisplay = '';
for (let i = 0; i < 5; i++) {
    alert(toDisplay);
}
console.log('Array:', array);
/*  Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
    modificada. */
console.log('\n-Exercise 5.b:');
for (let i = 0; i < 5; i++) {
    var stringCapital = array[i].substring(0, 1);
    var stringBody = array[i].substring(1);
    array[i] = stringCapital.toUpperCase() + stringBody.toLowerCase();
    alert(array[i]);
}
console.log('Array:', array);
/*  Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
    bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con
    la cadena completa. */
console.log('\n-Exercise 5.c:');
var sentence = '';
for (let i = 0; i < 5; i++) {
    sentence = sentence + array[i];
}
alert(sentence);
console.log('Array:', array);
/*  Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es
    decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0
    hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).  */
console.log('\n-Exercise 5.d:');
var arrayD = [];
for (let i = 0; i < 10; i++) {
    arrayD.push(i);
}
console.log('Array:', arrayD);