// Write an arrow function it will do the following:
// It will take two array inputs
// Combine the two arrays and assign them in a new array
// Find the maximum number from the new array and return the result.



const num1 = [2, 5, 6, 9, 96, 95, 105];
const num2 = [55, 88, 954, 995, 10,1094];
const findMaxNum = (num1, num2) => {
    let newArray = [];
    for (let i = 0; i < num1.length; i++){
        newArray.push(num1[i]);
    }
    for (let i = 0; i < num2.length; i++){
        newArray.push(num2[i]);
    }
    const maxNumber = Math.max(...newArray);
    return maxNumber;
}

const result = findMaxNum(num1, num2);
console.log(result);