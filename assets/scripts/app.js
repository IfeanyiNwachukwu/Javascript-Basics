const defaultResult = 0;

let currentResult = defaultResult;

let calculationDescription = `(${defaultResult}  + 10) * 3 / 2 - 1`;

currentResult = (currentResult  + 10) * 3 / 2 - 1;

outputResult(currentResult, calculationDescription);

function add(num1,num2){
    const result = num1 + num2;
    return result;
}

add(12,18);