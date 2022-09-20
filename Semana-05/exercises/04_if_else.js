console.log('--EXERCISE 04: IF ELSE');
/*  Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
    mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.  */
console.log('\n-Exercise 4.a:');
var number = Math.random();
if (number >= 0.5) {
    alert('Greater than 0,5');
}
else {
    alert('Lower than 0,5');
}
console.log('Number:', number);
/*  Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
    1. “Bebe” si la edad es menor a 2 años;
    2. “Niño” si la edad es entre 2 y 12 años;
    3. “Adolescente” entre 13 y 19 años;
    4. “Joven” entre 20 y 30 años;
    5. “Adulto” entre 31 y 60 años;
    6. “Adulto mayor” entre 61 y 75 años;
    7. “Anciano” si es mayor a 75 años. */
console.log('\n-Exercise 4.b:');
var age = Math.floor(Math.random * 101);
if (age < 2) {
    alert('Baby');
}
else if ((age >= 2) && (age <= 12)) {
    alert('Children');
}
else if ((age > 12) && (age < 20)) {
    alert('Teenager');
}
else if ((age >= 20) && (age <= 30)) {
    alert('Young');
}
else if ((age > 30) && (age <= 60)) {
    alert('Adult');
}
else if ((age > 60) && (age <= 75)) {
    alert('Adulto mayor');
}
else {
    alert('Anciano');
}
console.log('Age:', age);