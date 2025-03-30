// ❗ Description:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// ✅ SOLUTION: 

function count(string) {
   let obj={};
   if (string.length === 0) { return obj; }
   
   for(let i=0;i<string.length;i++) {
      if(string[i] in obj) {obj[string[i]]+=1;}
      else {
         obj[string[i]]=1;
      }
   }
   return {obj};
};

console.log(count("abbcccdddd"));
