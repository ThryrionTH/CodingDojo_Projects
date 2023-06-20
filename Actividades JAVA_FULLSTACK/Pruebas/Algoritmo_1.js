var a = 100;
var cadena = "";
function repetirNumero(numero) {
    for (let i = 0; i < numero; i++) {
        cadena += numero;
    }
    return cadena;
}
//repetirNumero(a);
console.log("La cadena de números es: " + cadena);
//console.log(cadena.length /3)




// ************************************************

function resultadoNota(nota){
	if (Number(nota) == nota) {
		if (nota > 0 && nota <= 10) {   
			if (nota < 3) {
				console.log("Muy deficiente");
			}
			else if (nota < 5) {
				console.log("Insuficiente", nota);
			}
			else if (nota < 6) {
				console.log("Suficiente");
			}
			else if (nota < 7) {
				console.log("Bien");
			}
			else if (nota < 9) {
				console.log("Notable");
			}
			else if (nota >= 9) {
				console.log("Sobresaliente");
			}
		}
		else {
			console.log("Nota errónea");
		}
	}
	else {
		if (nota != undefined) {
			console.log("Introduce una nota válida");
		}
	}
}

resultadoNota(4.7)
resultadoNota("5")
resultadoNota("A")
resultadoNota(11)
resultadoNota(-1)



// ************************************************

function numeroPasos(numero) {
    var pasos = 0;
    while (numero >= 1) {
        if (numero % 2 == 1 && numero > 1) {
            numero--;
            pasos++;
        }
        pasos++;
        numero /= 2;
    }
    return pasos;
}
var pasos = numeroPasos(23);
console.log("Se necesitaron: " + pasos + " pasos para llegar a 0");



var a = 100;
var cadena = "";
function repetirNumero(numero) {
    for (let i = 0; i < numero; i++) {
        cadena += numero;
    }
    return cadena;
}
console.log("La cadena de números es: " + cadena);




// ************************************************

function resultadoNota(nota){
	if (Number(nota) == nota) {
		if (nota > 0 && nota <= 10) {
			if (nota < 3) {
				console.log("Muy deficiente");
			}
			else if (nota < 5) {
				console.log("Insuficiente");
			}
			else if (nota < 6) {
				console.log("Suficiente");
			}
			else if (nota < 7) {
				console.log("Bien");
			}
			else if (nota < 9) {
				console.log("Notable");
			}
			else if (nota >= 9) {
				console.log("Sobresaliente");
			}
		}
		else {
			console.log("Nota errónea");
		}
	}
	else {
		if (nota != undefined) {
			console.log("Introduce una nota válida");
		}
	}
}

resultadoNota(4.5)
resultadoNota(9)
resultadoNota("A")
resultadoNota(11)
resultadoNota(-1)



// ************************************************

function numeroPasos(numero) {
    var pasos = 0;
    while (numero >= 1) {
        if (numero % 2 == 1 && numero > 1) {
            numero--;
            pasos++;
        }
        pasos++;
        numero /= 2;
    }
    return pasos;
}
var pasos = numeroPasos(23);
console.log("Se necesitaron: " + pasos + " pasos para llegar a 0");