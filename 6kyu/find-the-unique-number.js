// ❗ Description:

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
//    findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
//
//    The tests contain some very huge arrays, so think about performance.
//
//    This is the first kata in series:
//
// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// ✅ SOLUTION:

function findUniq(arr) {
   let myArr=[...arr].sort();
   for(let i=0,counter=0;i<myArr.length;i++){
      if(myArr[i]!==myArr[i+1]){
         if(counter===0) return myArr[i];
         counter=0;
         continue;
      }
      counter+=1
   }
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1]))