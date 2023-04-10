function determinarParidad(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " es un número par");
  } else {
    console.log(numero + " es un número impar");
  }
}
determinarParidad(2);

function compararNumeros(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2);
  } else if (num2 > num1) {
    console.log(num2 + " es mayor que " + num1);
  } else {
    console.log(num1 + " y " + num2 + " son iguales");
  }
}
compararNumeros(10, 10);

function esMultiploDe5(numero) {
  if (numero % 5 === 0) {
    console.log(numero + " es múltiplo de 5.");
  } else {
    console.log(numero + " no es múltiplo de 5.");
  }
}
function numerosimpresas(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}
numerosimpresas(20);

function palabrasimpresas(palabra, cantidad) {
  for (let i = 0; i < cantidad; i++) {
    console.log(palabra);
  }
}
palabrasimpresas("Cajas de CHOCOLATE!", 40);

function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

imprimirArray(["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]);

function imprimirArraySinQuintoElemento(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

imprimirArraySinQuintoElemento([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function imprimirArrayMultiplicadoPorNumero(array, numero) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * numero);
  }
}

imprimirArrayMultiplicadoPorNumero([4, 5, 6, 10, 20], 5);
