function saludar(numero, nombre) {
    for (let i = 1; i <= numero; i++) {
        var x = multiplicar(i);
        if (x % 3 == 0 && x % 4 == 0) {
            console.log("Hola " + nombre);
        } else if (x % 3 == 0) {
            console.log("Hola");
        }
    }
}

function multiplicar(numero){
    return numero*2;
}

saludar(6, "David");



// ************************************************



function mostrarVertical(cadena){
    for (let i = 0; i < cadena.length; i++) {
        console.log(cadena[i], i);
    }
    return cadena[1] + cadena[8] + cadena[13];
}

var cadena = mostrarVertical("¡Coding Dojo Chile!");
console.log(cadena);



// ************************************************



function encriptar(cadena){
    var nuevaCadena = cadena
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] == "a"){
            nuevaCadena = remplazar(nuevaCadena, i, 4);
        } else if(cadena[i] == "e"){
            nuevaCadena = remplazar(nuevaCadena, i, 3);
        } else if(cadena[i] == "i"){
            nuevaCadena = remplazar(nuevaCadena, i, 1);
        } else if(cadena[i] == "o"){
            nuevaCadena = remplazar(nuevaCadena, i, 0);
        } else if(cadena[i] == "u"){
            nuevaCadena = remplazar(nuevaCadena, i, 7);
        } 
    }
    console.log(nuevaCadena);
}

function remplazar(cadena, posicion, valor){
    var nuevaCadena = cadena.replace(cadena[posicion], valor);
    return nuevaCadena;
}

encriptar("¡Coding Dojo Chile - Me Gusta!");

remplazar("hola Mundo", 5, 1)