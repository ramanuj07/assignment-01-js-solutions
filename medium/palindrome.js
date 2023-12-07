/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newStr = str.replace(/[^\w]/g, '').replace(/\s/g, '').toLowerCase();
  // explaination of above line 
  // in javascript regular expressions are used denoted by this symbol --> // 
  // anything inside regular expressions would be searched. In this case ^w is used which means anything which is not a word character would be replaced. Here /g means that it is applicable globally which means it won't stop after finding the first non-word character and would rather iterate throughout the string

  // the other \s means that it would replace all the whitespace or tab characters with an empty string and here too it is mentioned that it is applicable globally by using /g. Hope you understood what we did here
  let outputStr = "";

  let totalLength = newStr.length;

  for(let i=totalLength-1; i>=0; i--) {
    outputStr += newStr[i];
  }
  // simple loop is used above which pushes the characters from last index of our newStr and goes towards the 0 index. hence, we get the reverse of the newStr which is denoted here as outputStr. 

  
  return newStr === outputStr;
  // here newStr is made strictly equal to outputStr which means if it is true then it would return true else false 
}

module.exports = isPalindrome;
