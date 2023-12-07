/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

  // in javascript regular expressions are used denoted by this symbol --> //
  // anything inside regular expressions would be searched. In this case \s means that it would replace all the whitespace or tab characters with an empty string.  Here /g means that it is applicable globally which means it won't stop after finding the first whitespace character and would rather iterate throughout the string
  // we also mentioned to convert it to lowercase so that we can get uniformity in all types of string whether they are uppercase or lowercase or a mix of both. this is done using toLowerCase() in javascript

  return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');

  // here we first used the split function which splits each character of the string into an array and then we used sort function which sorts that character array. then we used the join function which joins back the character arrays into the string. 
  // then we simply returned the strings. if they are equal, it will be true otherwise false
  
  // don't worry if you don't remember or know all of this. they are basics of strings and one will have a grab of these functions in string with time after solving questions on strings.

}

module.exports = isAnagram;
