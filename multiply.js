let multiplyElements = function(arr){
    let result = 1;
    for(let val of arr){
        result *= val;
    };
    return ('Перемножение элементов массива равно: ' + result);
}

module.exports = multiplyElements;