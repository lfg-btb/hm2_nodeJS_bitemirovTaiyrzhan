let maxMinusMin = function (arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let result = max - min;
    return ('Разность максимального и минимального элемента массива равна: ' + result);
}

module.exports = maxMinusMin;