// Practice Problem:3
// write an arrow function where it will do the following :
// a) Square each array element
// b) calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print The Result. 

const Numbers = [2, 5, 6, 9];
const doMaths = num => {
    let squareNumbers = [];
        let sum = 0;
    for (let i = 0; i < num.length; i++){
    
        const square = Math.pow(num[i], 2);
        squareNumbers.push(square);
        sum = sum + square; 
    }  
    average = sum / squareNumbers.length;
    return average;
}

const averageNum = (doMaths(Numbers));
console.log(averageNum);