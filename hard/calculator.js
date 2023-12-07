/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  // highly recommend learning about classes in javascript from mdn docs or from youtube. here we have created a constructor with result initialised to 0

  add(number) {
    this.result += number;
  } 
  // simply adding the number with the result and storing it in result

  subtract(number) {
    this.result -= number;
  }
  // simply subtracting the number from the result and storing it in result

  multiply(number) {
    this.result *= number;
  }
  // simply multiplying the number with the result and storing it in result

  divide(number) {
    if (number === 0) {
      throw new Error();
    }
    this.result /= number;
  }
  // here if the number is 0 and we do a division say 10/0 it should throw an error
  // we divide the result with the number and store it in result 

  clear() {
    this.result = 0;
  }
  // here result is again set to 0

  getResult() {
    return this.result;
  }
  // this simply returns the result 

  calculate(str) {
    const newStr = str.replace(/\s/g, '');
    // in javascript regular expressions are used denoted by this symbol --> // 
    // anything inside regular expressions would be searched. In this case \s means that it would replace all the whitespace or tab characters with an empty string.  Here `g` means that it is applicable globally which means it won't stop after finding the first whitespace character and would rather iterate throughout the string

    if (!/^[0-9+\-*/().]+$/.test(newStr)) {
      throw new Error();
    }
    // ^: Asserts the start of the string.
    // [0 - 9 +\-* /().]: A character class that allows any digit (0-9), plus (+), minus (-), asterisk (*), forward  slash (/), opening parenthesis((), closing parenthesis()), or dot(.).
    // +: Quantifier that matches one or more occurrences of the characters within the square brackets.
    // $: Asserts the end of the string.
    // test(newStr): The test method is a JavaScript method for regular expressions. It checks if the given string (newStr in this case) matches the pattern defined by the regular expression. It returns true if there is a match and false otherwise.

    try {
      this.result = eval(newStr);
      // The eval function in JavaScript is a global function that evaluates or executes a string of JavaScript code. It takes a string argument containing a JavaScript expression, statement, or sequence of statements, and it executes that code
      
      if (!isFinite(this.result)) {
        throw new Error();
      }
      // If the result is not finite (e.g., Infinity resulting from division by zero), it will throw error
    } 
    
    catch (error) {
      throw new Error();
    }
  }
}

module.exports = Calculator;
