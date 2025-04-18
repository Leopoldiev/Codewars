// ❗ Description:
// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']
// expected output is:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

// ✅ SOLUTION:

let numArr = [];
let strArr = [];
let boolArr = [];
let resultObj = {};

for (let i = 0; i < input.length; i++) {
   if (typeof (input[i]) === "number") numArr.push(input[i]);
   else if (typeof (input[i]) === "string") strArr.push(input[i]);
   else boolArr.push(input[i]);
}
if (numArr.length > 0) resultObj.number = numArr;
if (strArr.length > 0) resultObj.string = strArr;
if (boolArr.length > 0) resultObj.boolean = boolArr;

return resultObj