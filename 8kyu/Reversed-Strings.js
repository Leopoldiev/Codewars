// ❗ Description:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// ✅ SOLUTION:

function solution(str) {
   let reversedStr = "";
   for (let i = str.length - 1; i >= 0; i--) { reversedStr += str[i]; }
   return reversedStr;
}