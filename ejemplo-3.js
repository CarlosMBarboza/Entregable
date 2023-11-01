/*function encontrarMayor(array) {
  let mayor = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i]; 

  return mayor;
}


const numeros = [10, -25, 20, 15, 8, -50];
const numeroMayor = encontrarMayor(numeros);
console.log(numeroMayor); 
*/
/*
let numeros = [34, 56, 78, 43, 10];
let mayor = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

console.log("El número mayor es: " + mayor);
*/

let numeros = [5, 12, 8, 11, 47];

let mayor = 0;

let i = 0;
while (i < numeros.length) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
  i++;
}
console.log("El mayor número del array es: " + mayor);