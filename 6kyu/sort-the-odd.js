// ❗ Description:

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//
//    Examples
//    [7, 1]  =>  [1, 7]
//    [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// ✅ SOLUTION:

function sortArray(array) {
   const oddArr=[];
   const posArr=[];
   const resultArr=[...array];
   for (let i=0;i<array.length;i++){
      if(array[i]%2){
         oddArr.push(array[i]);
         posArr.push(i);
      }
   }
   oddArr.sort((a,b)=>a-b);
   for(let j=0;j<posArr.length;j++){
      resultArr[posArr[j]]=oddArr[j];
   }
   return resultArr;
}