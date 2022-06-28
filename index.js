function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}


/* 
  reverse the input string
  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  create an array from the input string
  reverse the array
  create a string from the reversed array
  return the reversed string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
   console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("gig"));

  console.log("");
}

module.exports = isPalindrome;