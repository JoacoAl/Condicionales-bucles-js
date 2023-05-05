/* EJERCICIO 1 */

/* let numero = 10;

for (let i = 1; i <= 10; i++) {
  console.log(`}${numero} x ${i} = ${numero * i}`);
}

console.log("Fin");


/* EJERCICIO 2 */

/* let numeroIngresado = Number(
  prompt("Ingresa un numero para meterlo a la caja:")
);

const numerosLista = [];
while (numeroIngresado > 0) {
  numerosLista.push(numeroIngresado);
  numeroIngresado = Number(prompt("Ingrese otro numero"));
}

console.log(numerosLista); */

/* EJERCICIO 3 */

/* let finBucle = true;
let contador = 0;
let numeroIngresado2 = Number(
  prompt("Adivina el numero en el que estoy pensando, del 1 al 100")
);

while (numeroIngresado2 >= 1 && numeroIngresado2 <= 100 && finBucle) {
  contador++;
  if (numeroIngresado2 < numerosLista[numerosLista.length - 1]) {
    numeroIngresado2 = Number(
      prompt("El numero ingresado es menor, escriba otro numero")
    );
  } else if (numeroIngresado2 > numerosLista[numerosLista.length - 1]) {
    numeroIngresado2 = Number(
      prompt("El numero ingresado es mayor, escriba otro numero")
    );
  } else if (numeroIngresado2 === numerosLista[numerosLista.length - 1]) {
    finBucle = false;
    alert("GANASTE");
    alert(`Tu numero de intentos fue de ${contador}`);
  }
}
 */

/* EJERCICIO 4 */
/* let numero = Number(prompt("Ingrese un numero"));
function numerosDivisores(numero) {
  let divisores = [];
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
    }
  }
  return divisores;
}

let divisores = numerosDivisores(numero);
if (divisores.length <= 2) {
  console.log(`El numero ${numero} es primo`);
} else {
  console.log(`El numero ${numero} no es primo`);
}
 */
/* EJERCICIO 5 */
/* let numero = Number(prompt("Ingrese un numero"));
function posiblesDivisores(numero) {
  let divisores = [];
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
    }
  }
  return divisores;
}

let divisores = posiblesDivisores(numero);
console.log(`Los numeros divisores de ${numero} son ${divisores}`); */

/* EJERCICIO 6 */

/* const nombres = [
  "joaco",
  "mateo",
  "franco",
  "nico cirulli crack",
  "fede podria ser mi viejo",
  "yovani te extraño",
  "elparcival",
  "haland",
  "mbappe",
  "messi",
];

for (let i = 0; i <= nombres.length; i++) {
  console.log(nombres[i]);
} */

/* EJERCICIO 7 */

/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= 9; i++) {
  console.log(`${numeros[i]}` * 2);
}
 */

/* EJERCICIO 8 */

/* const familia = [
  { nombre: "Joaquin", edad: 18, pais: "Argentina", ciudad: "Ramos Mejia" },
  { nombre: "Mateo", edad: 22, pais: "Argentina", ciudad: "Rio Negro" },
  { nombre: "Franco", edad: 19, pais: "Argentina", ciudad: "Haedo" },
  { nombre: "la abuela", edad: 70, pais: "Argentina", ciudad: "Ramos Mejia" },
  { nombre: "el abuelo", edad: 73, pais: "Argentina", ciudad: "Ramos Mejia" },
];

for (let i = 0; i <= familia.length; i++) {
  const miembros = familia[i];
  console.log(
    `Hola soy ${miembros.nombre}. Tengo ${miembros.edad} años, y soy de ${miembros.pais}.`
  );
} */

/* EJERCICIO 9 */

/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= 9; i++) {
  const numIndex = numeros[i];
  if (numIndex % 2 !== 0) {
    console.log(numIndex);
  }
}
 */

/* EJERCICIO 10 */

/* let numero;
let resultadoPares = 0;
let resultadoImpares = 0;

do {
  numero = Number(prompt("Ingrese un número:"));
  if (numero !== 0) {
    if (numero % 2 === 0) {
      resultadoPares += numero;
    } else if (numero % 2 !== 0) {
      resultadoImpares += numero;
    }
  }
} while (numero !== 0);

console.log(`La suma de los números pares es ${resultadoPares}`);
console.log(`La suma de los números impares es ${resultadoImpares}`); */

/* EJERCICIO 11 */

/* let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeroMayor = listaNumeros[0];
for (let i = 1; i < listaNumeros.length; i++) {
  if (listaNumeros[i] > numeroMayor) {
    numeroMayor = listaNumeros[i];
  }
}
console.log(numeroMayor);
 */

/* EJERCICIO 12 */

/* let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeroMenor = listaNumeros[0];
for (let i = 1; i < listaNumeros.length; i++) {
  if (listaNumeros[i] < numeroMenor) {
    numeroMenor = listaNumeros[i];
  }

  console.log(numeroMenor);
} */

/* EJERCICIO 13 */

/* let player1 = prompt("Jugador 1 ingrese su nombre:");
let player2 = prompt("Jugador 2 ingrese su nombre:");

function piedraPapelTijera() {
  do {
    player1 = prompt(`${player1}¿Piedra, papel o tijera?`);
    player2 = prompt(`${player2}¿Piedra, papel o tijera?`);

    if (player1 === player2) {
      alert("Empate, sigan jugando.");
    }
  } while (player1 === player2);

  if (
    (player1 === "piedra" && player2 === "tijera") ||
    (player1 === "papel" && player2 === "piedra") ||
    (player1 === "tijera" && player2 === "papel")
  ) {
    console.log(`¡Jugador 1 gana!`);
  } else {
    console.log(`¡Jugador 2 gana!`);
  }
}

piedraPapelTijera();
 */

/* EJERCICIO 14 */

/* let triangulo = "";
for (let i = 1; i <= 5; i++) {
  triangulo += "*";
  console.log(triangulo);
} */
/* EJERCICIO 15 */

for (let i = 5; i >= 1; i--) {
  let espacio = "";
  for (let a = 0; a < i; a++) {
    espacio += "*";
  }
  console.log(espacio);
}
