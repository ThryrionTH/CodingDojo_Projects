// // // 1. ************************************************

// Crear un algoritmo para multiplicar tres números, sin utilizar el signo de multiplicación.


var numB = 3;
var numA = 5;
var numC = 0;

function num_primeros{
    while (numB == 0) {
        numC = numB;
        console.log("El producto es: " + numC);
    }

    while (numB == 1) {
        numC = numA;
        console.log("El producto es: " + numC);
    }

    while (numB > 0) {
        numC = numA + numC;
        numB = numB - 1;
    }
}

console.log("El producto es: " + numC);


// multiplicar(3, 5, 7)

// Output:
// 105


// // // 2. ************************************************

// Crear una función que me permita ver un número de forma extendida.

// Input
//     1524
// Output
//     1000 + 500 + 20 + 4


// Input
//     12
// Output
//     10 + 2
// // // 1. ************************************************

// Crear un algoritmo para multiplicar tres números, sin utilizar el signo de multiplicación.

// multiplicar(3, 5, 7)

// Output:
// 105


// // // 2. ************************************************

// Crear una función que me permita ver un número de forma extendida.

function descomponer(num) {
    var m = [];
    var x = num.length;
    console.log(x);
    for (let i = 0; i < x; i++) {
        m.push(num[i] * (10 ** (x-i-1)));
    }
    
    console.log(m);
    console.log(m[0], "+", m[1], "+", m[2], "+", m[3])
}

console.log(descomponer("1524"))

// Input
//     1524
// Output
//     1000 + 500 + 20 + 4


// Input
//     12
// Output
//     10 + 2

