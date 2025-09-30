// ❗ Description:

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//    Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// ✅ SOLUTION:

function solution(str){
 const resultArray=[];
 for(let i=2,j=0;i<=str.length;j=i,i+=2){
 resultArray.push(str.substring(j,i));
 }
 
 if(str.length%2){
    resultArray.push(str.substring(str.length-1)+'_')
 }
 return resultArray;
}

console.log(solution("abcdefg"))