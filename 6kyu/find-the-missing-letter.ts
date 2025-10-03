// ❗ Description:

// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
//
//    You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
//
// Example:
//
//    ['a','b','c','d','f'] -> 'e'
//    ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)
//
// Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have also created other katas. Take a look if you enjoyed this kata!

// ✅ SOLUTION:

function findMissingLetter(array)
{
   const alphabetArr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   const index=alphabetArr.indexOf(array[0].toLowerCase());
   for(let i=index,j=0; i<alphabetArr.length; i++,j++){
      if(alphabetArr[i]!==array[j].toLowerCase()) return alphabetArr[index]>array[0]?alphabetArr[i].toUpperCase():alphabetArr[i]
   }
}

console.log(findMissingLetter(['C','E','F']));
