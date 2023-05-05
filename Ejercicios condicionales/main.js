/* EJERCICIO 1 */

/* const numberOne = Number(prompt("Escribi un numero:"));
const numberTwo = Number(prompt("Escribi un segundo numero:"));

if (numberOne > numberTwo) {
  console.log("El numero ingresado primero es mayor");
} else {
  console.log("El numero ingresado primero es menor");
} */

/* EJERCICIO 2 */

/* const number3 = Number(prompt("Escribi un numero:"));
const number4 = Number(prompt("Escribi un segundo numero:"));

if (number3 === number4) {
  console.log("Los numeros ingresados son iguales");
} else {
  console.log("Los numeros ingresados son diferentes");
} */

/* EJERCICIO 3 */

/* const number5 = Number(prompt("Escribi un numero:"));
const number6 = Number(prompt("Escribi un segundo numero:"));

if (number5 > number6) {
  console.log("El primer numero ingresado es mayor");
} else if (number5 < number6) {
  console.log("El segundo numero ingresado es mayor");
} else {
  console.log("Los numeros son iguales");
} */

/* EJERCICIO 4 */
/* 
const number7 = Number(prompt("Escribi un numero:"));
const number8 = Number(prompt("Escribi un segundo numero:"));
const number9 = Number(prompt("Escribi un tercer numero:"));

if (number7 < number8 && number7 < number9) {
  console.log(`${number7} es el numero mas chico`);
} else if (number8 < number7 && number8 < number9) {
  console.log(`${number8} es el numero mas chico`);
} else {
  console.log(`${number9} es el numero mas chico`);
} */

/* EJERCICIO 5 */

/* const persona1 = {
  nombre: "Joaquin",
  edad: 18,
  altura: 1.75,
};
const persona2 = {
  nombre: "Mateo",
  edad: 22,
  altura: 1.65,
};

if (persona1.altura > persona2.altura) {
  console.log(`${persona1.nombre} es mas alto que ${persona2.nombre}`);
} else if (persona1.altura < persona2.altura) {
  console.log(`${persona2.nombre} es mas alto que ${persona1.nombre}`);
} else {
  console.log(`${persona1.nombre} y ${persona2.nombre} tienen la misma altura`);
}

if (persona1.edad > persona2.edad) {
  console.log(`${persona1.nombre} es mayor que ${persona2.nombre}`);
} else if (persona1.edad < persona2.edad) {
  console.log(`${persona2.nombre} es mayor que ${persona1.nombre} `);
} else {
  console.log(`${persona2.nombre} y ${persona1.nombre} tienen la misma edad `);
} */

/* EJERCICIO 6 */

/* const nombre = prompt("Ingrese su nombre:");
const edad = Number(prompt("Ingrese su edad:"));
const altura = Number(prompt("Ingrese su altura:"));
const vision = Number(prompt("Ingrese su vision (de 0 a 10)"));

if (edad >= 18 && altura >= 150 && vision >= 8) {
  console.log(`${nombre} esta capacitado/a para conducir`);
} else {
  console.log(`${nombre} no esta capacitado/a para conducir`);
}
 */

/* EJERCICIO 7 */
/* const nombre = prompt("Ingrese su nombre:");
const pase = prompt("¿Tiene pase VIP o normal?");
const tieneEntrada = prompt("¿Tiene entrada? (Si/No)");

if (nombre === "Joaquin" || pase === "VIP") {
  console.log(`Bienvenidos al evento, pueden pasar.`);
}
if (tieneEntrada === "Si") {
  const usarMiEntrada = prompt("¿Queres usar tu entrada? (Si/No)");
  if (usarMiEntrada === "Si") {
    console.log("Puede pasar al evento.");
  } else {
    console.log("Puede comprar una entrada.");
  }
} else {
  const comprarEntrada = prompt("¿Desea comprar la entrada? (Si/No)");
  if (comprarEntrada === "Si") {
    const dineroDisponible = prompt("¿Cuanto dinero disponible tenes?");
    if (dineroDisponible >= 1000) {
      console.log("La venta a sido exitosa, puede pasar al evento.");
    } else {
      console.log(
        "Lo lamento, no posee el dinero suficiente para abonar la entrada."
      );
    }
  }
} */

/* EJERCICIO 8 */

/* const numeroIncognita = 5;
let numeroIngresado = Number(
  prompt("Adivinie el numero del 1 al 10 que estoy pensando. Tenes 3 intentos.")
);

if (numeroIngresado === numeroIncognita) {
  console.log("Ganaste, has adivinado el número");
} else if (numeroIngresado < numeroIncognita) {
  numeroIngresado = Number(
    prompt("El numero ingresado es menor. Tenes un segundo intento")
  );
  if (numeroIngresado === numeroIncognita) {
    console.log("Ganaste, has adivinado el número");
  } else if (numeroIngresado < numeroIncognita) {
    numeroIngresado = Number(
      prompt("El numero ingresado es menor. Tenes un ultimo intento")
    );
    if (numeroIngresado === numeroIncognita) {
      console.log("Ganaste, has adivinado el número");
    } else if (
      numeroIngresado > numeroIncognita ||
      numeroIngresado < numeroIncognita
    ) {
      console.log("Sos un burro");
    }
  } else if (numeroIngresado > numeroIncognita) {
    numeroIngresado = Number(
      prompt("El numero ingresado es mayor. Tenes un ultimo intento")
    );
    if (numeroIngresado === numeroIncognita) {
      console.log("Ganaste, has adivinado el número");
    } else if (
      numeroIngresado > numeroIncognita ||
      numeroIngresado < numeroIncognita
    ) {
      console.log("Sos un burro");
    }
  }
} else if (numeroIngresado > numeroIncognita) {
  numeroIngresado = Number(
    prompt("El numero ingresado es mayor. Tenes un segundo intento")
  );
  if (numeroIngresado === numeroIncognita) {
    console.log("Ganaste, has adivinado el número");
  } else if (numeroIngresado < numeroIncognita) {
    numeroIngresado = Number(
      prompt("El numero ingresado es menor. Tenes un ultimo intento")
    );
    if (numeroIngresado === numeroIncognita) {
      console.log("Ganaste, has adivinado el número");
    } else if (
      numeroIngresado > numeroIncognita ||
      numeroIngresado < numeroIncognita
    ) {
      console.log("Sos un burro");
    }
  } else if (numeroIngresado > numeroIncognita) {
    numeroIngresado = Number(
      prompt("El numero ingresado es mayor. Tenes un ultimo intento")
    );
    if (numeroIngresado === numeroIncognita) {
      console.log("Ganaste, has adivinado el número");
    } else if (
      numeroIngresado > numeroIncognita ||
      numeroIngresado < numeroIncognita
    ) {
      console.log("Sos un burro");
    }
  }
} */

/* EJERCICIO 9 */

/* alert("Hola necesitamos saber tu edad");
const edad = Number(prompt("Ingresa tu edad:"));
if (edad >= 0 && edad <= 12) {
  alert(`Tu edad es ${edad}, sos un infante`);
} else if (edad >= 13 && edad <= 18) {
  alert(`Tu edad es ${edad}, sos adolescente`);
} else if (edad >= 19 && edad <= 45) {
  alert(`Tu edad es ${edad}, sos mayor`);
} else if (edad > 45 && edad < 100) {
  alert(`Tu edad es ${edad}, eso quiere decir que eres un anciano:`);
} else if (edad > 100) {
  alert("¿Sos real o pifiaste?");
} */

/* EJERCICIO 10 */

/* let jugador1 = prompt("Nombre del primer participante");
let jugador2 = prompt("Nombre del segundo participante");
let elecciones = ["piedra", "papel", "tijera"];

alert(`Empezemos a jugar`);

movimientoDelJugador1 = prompt(
  `${jugador1} ¡Empezas jugando vos, tenes que elejir: PIEDRA, PAPEL o TIJERA!`
);
movimientoDelJugador2 = prompt(
  `${jugador2}, el jugador 1 ya elijio, es tu turno de elejir: PIEDRA, PAPEL o TIJERA`
);

if (movimientoDelJugador1 === movimientoDelJugador2) {
  alert(`Empate`);
} else if (
  movimientoDelJugador1 === "piedra" &&
  movimientoDelJugador2 === "tijera"
) {
  alert(`¡Ganador el ${jugador1}!`);
} else if (
  movimientoDelJugador1 === "tijera" &&
  movimientoDelJugador2 === "papel"
) {
  alert(`¡Ganador el ${jugador1}!`);
} else if (
  movimientoDelJugador1 === "papel" &&
  movimientoDelJugador2 === "piedra"
) {
  alert(`¡Ganador el ${jugador1}!`);
} else if (
  movimientoDelJugador1 != elecciones ||
  movimientoDelJugador2 != elecciones
) {
  alert("Uno de los jugadores hizo trampa");
} else {
  alert(`¡Ganador el ${jugador2} por incumplimientos de las reglas`);
}

 */

/* EJERCICIO 11 */
/* let color = prompt(
  "Elegi el color: puede ser blanco, negro, verde, azul, amarillo, rojo"
);

switch (color) {
  case "Blanco":
  case "Negro":
    alert("Falta de color");
    break;
  case "Verde":
    alert("El color de la naturaleza");
    break;
  case "Azul":
    alert("El color del agua");
    break;
  case "Amarillo":
    alert("El color del sol");
    break;
  case "Rojo":
    alert("El color del fuego");
    break;
  case "Marron":
    alert("El color de la tierra");
  default:
    alert("Excelente eleccion, no lo habiamos pensado");
    break;
} */

/* EJERCICIO 12 */

/* alert("BIENVENIDOS A LA CALCULADORA VIRTUAL");

let numero1 = Number(prompt("Ingresa el primer número:"));
let numero2 = Number(prompt("Ingresa el segundo número:"));
let operacion = prompt(
  "Ingresa la operación a realizar (+ para sumar, - para restar, * para multiplicar, / para dividir):"
);

if (operacion === "+") {
  let resultado = numero1 + numero2;
  alert(`El resultado de la suma es: ${resultado}`);
} else if (operacion === "-") {
  let resultado = numero1 - numero2;
  alert(`El resultado de la resta es: ${resultado}`);
} else if (operacion === "*") {
  let resultado = numero1 * numero2;
  alert(`El resultado de la multiplicacion es: ${resultado}`);
} else if (operacion === "/") {
  if (numero2 === 0) {
    alert("ERROR: No se puede dividir entre cero.");
  } else {
    let resultado = numero1 / numero2;
    alert(`El resultado de la division es: ${resultado}`);
  }
} else {
  alert("syntax ERROR");
}
 */

/* EJERCICIO 13 */

/* let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let fechaDeNacimiento = prompt("Ingrese su fecha de nacimiento");
let documento = Number(prompt("Ingrese su DNI:"));

alert(
  `${nombre}, ${apellido}, ${fechaDeNacimiento}, ${documento} ¿Estos datos estan correctos?`
);

const DNI = {
  nombre: `${nombre}`,
  apellido: `${apellido}`,
  fechaDeNacimiento: `${fechaDeNacimiento}`,
  documento: `${documento}`,
};

console.table(DNI);
let mensajeDeConfirmacion = prompt("¿Queres modificar tus datos? (si/no)");

if (mensajeDeConfirmacion === "no") {
  alert("¡Registro exitoso!");
} else if (mensajeDeConfirmacion === "si") {
  alert("Volve a intentarlo en 1 mes.");
}
 */
