// ❗ Description:
// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

// ✅ SOLUTION:

function sumNoDuplicates(numList) {
   let sortedArray=numList;
   let sum=0;
   sortedArray.sort((a,b)=>a-b);
   let dub=null;
   for(let i=0;i<sortedArray.length;i++){
      if(sortedArray[i]!==sortedArray[i+1] && sortedArray[i]!==dub) {sum+=sortedArray[i]; dub=null; continue;}
      else if(sortedArray[i]===sortedArray[i+1]) {dub=sortedArray[i]; continue;} else {dub=null; continue;}

      }
      return sum
   }

   console.log(sumNoDuplicates([1, 10, 3, 10, 10]));
   