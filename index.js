reverseString = string => string.split('').reverse().join('')


isPalindrome = word => word === reverseString(word)


/*
  1. Create a helper function that reverses a given string, takes in a string and returns a string
  2. Create function to evaluate palindrome that takes in a string and returns a bool
    a. if string === reversedString return true else return false
*/

/*
  A palindrome is a word or phrase that when spelled backwards, appears the same as it does spelled normally.
  Looking at the test cases, the input will be a string (the word to be checked whether or not it is a palindrome),
  and the output is a boolean (return true if palindrome, false if not).
  To check for palindromes, my thought process is to store each string in some way, reverse the string and store that
  value as well, then compare if the two are strictly equal. If so, it is indeed a palindrome.
  I know you can call split on a string and put each character into an array, and that there is an array method .reverse.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
