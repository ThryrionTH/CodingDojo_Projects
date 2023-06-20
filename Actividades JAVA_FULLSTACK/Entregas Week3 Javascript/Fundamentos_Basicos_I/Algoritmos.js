// 1. Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255. 
function num_1_255() {
    var arr = [];
    for (let i = 1; i <= 255; i++) {
        arr.push(i);
    }
    return arr
}
num_1_255();

// 2. Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.
function sum_par_num() {
    var sum = 0;
    for (let i = 1; i < 1001; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
sum_par_num();

// 3. Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000(ej: 1 + 3 + 5 +...+4997 + 4999).
function sum_impar_num() {
    var sum = 0;
    for (let i = 1; i < 5001; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    return sum;
}
sum_impar_num();

// 4. Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array(ej: [1, 2, 5] retorna 8.[-5, 2, 5, 12] retorna 14).
function sum_arr(arr) {
    var sum_arr = 0;
    for (let i = 0; i < arr.length; i++) {
        sum_arr = arr[i] + sum_arr;
    }
    return sum_arr;
}
sum_arr([-5, 2, 5, 12]);

// 5. Encuentra el mayor(max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor(ej: para[-3, 3, 5, 7] el número mayor(max) es 7).
function num_max(arr) {
    var max = arr[0];
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}
num_max([-3, 3, 5, 7]);

// 6. Encuentra el promedio(avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores(ej: para[1, 3, 5, 7, 20] el promedio es 7.2).
function num_avg(arr) {
    var avg = 0;
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    avg = sum / arr.length;
    return avg;
}
num_avg([1, 3, 5, 7, 20]);

// 7. Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50(ej: [1, 3, 5, …, 47, 49]).Pista: Usa el método ‘push’.
function arr_imp() {
    var arr_imp = [];
    for (let i = 1; i < 51; i++) {
        if (i % 2 != 0) {
            arr_imp.push(i);
        }
    }
    return arr_imp;
}
arr_imp();

// 8. Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y.Por ejemplo, si arr = [1, 3, 5, 7] y Y = 3, tu función devolverá 2(hay 2 números en el array mayores que 3, esto son 5 y 7).
function mayor_y(arr, Y) {
    var numY = Y;
    var num_Mayor = [];
    var valo = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > numY) {
            valo = valo + 1;
            num_Mayor.push(arr[i]);
        }
    }
    console.log("Hay " + valo + " números en el array mayores que " + Y + ", estos son: " + num_Mayor)
}
mayor_y([1, 3, 5, 7], 3);

// 9. Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor(ej: [1, 5, 10, -2] será[1, 25, 100, 4]).
function cuad_arr(arr) {
    var arrnew = [];
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i] * arr[i];
        arrnew.push(val);
    }
    return arrnew;
}
cuad_arr([1, 5, 10, -2]);

// 10. Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos(ej: [1, 5, 10, -2] se convertirá en[1, 5, 10, 0]).
function arr_neg(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
arr_neg([1, -5, 10, -2])

// 11. Max / Min / Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor(max), menor(min) y promedio(avg) del array original(ej: [1, 5, 10, -2] devolverá[10, -2, 3.5]).
function arr_max_min_avg(arr) {
    var arrnew = [];
    var avg = 0;
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
        if (max < arr[i]) {
            max = arr[i]
        }
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    avg = sum / arr.length;
    arrnew.push(max);
    arrnew.push(min);
    arrnew.push(avg);
    return arrnew;
}
arr_max_min_avg([1, 5, 10, -2]);

// 12. Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array.La extensión mínima predeterminada del array es 2(ej: [1, 5, 10, -2] será[-2, 5, 10, 1]).
function change_values(arr) {
    var num = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = num;
    return arr;
}
change_values([1, 5, 10, -2])

// 13. De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1, -3, 2], tu función devolverá[‘Dojo’,‘Dojo’, 2].
function num_to_str(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
num_to_str([-5, 4, -9]);