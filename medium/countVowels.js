/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;

  let newStr = str.replace(/\s/g, '').toLowerCase();
  // in javascript regular expressions are used denoted by this symbol --> \\ 
  // anything inside regular expressions would be searched. In this case \s means that it would replace all the whitespace or tab characters with an empty string.  Here /g means that it is applicable globally which means it won't stop after finding the first whitespace character and would rather iterate throughout the string
  // we also mentioned to convert it to lowercase so that we can get uniformity in all types of string whether they are uppercase or lowercase or a mix of both. this is done using toLowerCase() in javascript

  for(let i=0; i<newStr.length; i++) {
    if (newStr[i] == 'a' || newStr[i] == 'e' || newStr[i] == 'i' || newStr[i] == 'o' || newStr[i] == 'u') {
      count++;
    }
  }

  // we iterated through the loop and we mentioned the conditions that if the newStr is equal to any vowel then increment the count variable which is initialised to 0. 

  return count;
  // we returned the count variable giving us the count of the vowels encountered in the path of the string
}

module.exports = countVowels;