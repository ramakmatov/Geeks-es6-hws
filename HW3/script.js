//HW1

const data = (getDataType) => {
    console.log(typeof getDataType);
    };
    
    data('Hello World!');
    data(false);
    data(42);
    
    //HW2
    
    const calculate = (num1, operator, num2) => {
    let result;
    
    if (operator === '+') {
    result = num1 + num2;
    } else if (operator === '-') {
    result = num1 - num2;
    } else if (operator === '*') {
    result = num1 * num2;
    } else if (operator === '/') {
    result = num1 / num2;
    } else {
    console.log('Такой оператор нет!');
    return;
    }
    
    console.log(result);
    };
    
    calculate(40, '+', 2);
    calculate(52, '-', 12);
    calculate(30, '*', 3);
    calculate(23, '/', 10);
    
    //HW3
    
    const getPositionArrayElement = (element, array) => {
    let start = 0;
    let end = array.length - 1;
    
    while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    
        if (array[mid] === element) {
        return mid;
        } else if (array[mid] < element) {
        start = mid + 1;
        } else {
        end = mid - 1;
        }
        }
    
    return -1;
    };
    
    const myArray = [1, 2, 4, 5, 7];
    const element = 5;
    const position = getPositionArrayElement(element, myArray);
    console.log(position);