// ❗ Description:
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

// ✅ SOLUTION:

function getMiddle(s) {
   if (s.length < 3) return s;

   if (s.length % 2) return s.slice(s.length / 2, s.length / 2 + 1);
   else return s.slice(s.length / 2 - 1, s.length / 2 + 1);
}