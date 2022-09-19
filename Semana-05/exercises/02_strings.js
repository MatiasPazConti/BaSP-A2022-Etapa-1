console.log('--EXERCISE 02: STRINGS');
/*  Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
    (utilizar toUpperCase). */
console.log('\n-Exercise 2.a:');
var firstStringA = 'textodeprueba';
console.log('String:', firstStringA.toUpperCase());
/*  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
    5 caracteres guardando el resultado en una nueva variable (utilizar substring). */
console.log('\n-Exercise 2.b:');
var firstStringB = 'textodeprueba';
var firstSubstringB = firstStringB.substring(0, 5);
console.log('Sub-string:', firstSubstringB);
/*  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
    3 caracteres guardando el resultado en una nueva variable (utilizar substring). */
console.log('\n-Exercise 2.c:');
var firstStringC = 'textodeprueba';
var firstSubstringC = firstStringC.substring(firstStringC.length - 3);
console.log('Sub-string:', firstSubstringC);
/*  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
    letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar
    substring, toUpperCase, toLowerCase y el operador +).   */
console.log('\n-Exercise 2.d:');
var firstStringD = 'textodeprueba';
var firstSubstringD = firstStringD.substring(0, 1);
var secondSubstringD = firstStringD.substring(1);
var returnD = firstSubstringD.toUpperCase() + secondSubstringD.toLowerCase();
console.log('String:', returnD);
/*  Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la
    posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).   */
console.log('\n-Exercise 2.e:');
var firstStringE = 'texto de prueba';
var ocurrencePosE = firstStringE.indexOf(' ');
console.log('First blank-space position:', ocurrencePosE);
/*  Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
    Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
    ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
    toLowerCase y el operador +).   */
console.log('\n-Exercise 2.f:');
var firstStringF = 'textodeprueba holatodomundo';
var ocurrencePosF = firstStringF.indexOf(' ');
//First part
var firstSubstringF = firstStringF.substring(0, 1);
var secondSubstringF = firstStringF.substring(1, ocurrencePosF);
//Second part
var thirdSubstringF = firstStringF.substring(ocurrencePosF + 1, ocurrencePosF + 2);
var fourthSubstringF = firstStringF.substring(ocurrencePosF + 2);
//Concatenation
var returnF = firstSubstringF.toUpperCase() + secondSubstringF.toLowerCase() + ' '
            + thirdSubstringF.toUpperCase() + fourthSubstringF.toLowerCase();
console.log('String:', returnF);