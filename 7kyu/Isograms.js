// ❗Description:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// ✅"Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// SOLUTION:
function isIsogram(str) {
   if (str.length === 0) return true;

   const lowerString = str.toLowerCase();
   let mySet = new Set(lowerString);

   if (mySet.size !== str.length) return false;
   else return true;
}
console.log("Result:",isIsogram("Dermatoglyphics"));
console.log("Result:",isIsogram("aba"));
console.log("Result:",isIsogram("moOse"));
