var arr = [2, 3, 4, 1]

function fn(arr) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                var auxiliar = arr[j];
                arr[j] = arr[i];
                arr[i] = auxiliar;
            }
        }
    }
    console.log(arr);
}

fn(arr);



// ************************************************


var arr = [2, 5, 3, 4, 1]

function fn(arr) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    console.log(arr);
    return fn2(arr);
}

function fn2(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var r = fn(arr);
console.log(r);