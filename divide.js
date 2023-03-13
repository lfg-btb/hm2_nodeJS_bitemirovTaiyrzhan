let divideMaxMin = function (arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let result = max/min;
    return ('Деление максимального элемента массива на минимальное равно: ' + result);
}

module.exports = divideMaxMin;