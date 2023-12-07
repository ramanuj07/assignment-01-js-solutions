/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestNumber = numbers[0];
    // specify the largest number with the first available value in the numbers array 

    // iterate the loop in the numbers array. if any value is greater than our largestNumber, then assign the new value to the largest number. this way iterate throughout the loop and in the end return the largest number 
    for(let i=0; i<numbers.length; i++) {
        if(numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }
    return largestNumber;
}

module.exports = findLargestElement;