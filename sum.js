let sumElements = function (arr){
    let result = 0;
    for(let val of arr){
        result += val
    };
    return ('Сумма элементов массива равна: '+ result)
};

module.exports = sumElements;