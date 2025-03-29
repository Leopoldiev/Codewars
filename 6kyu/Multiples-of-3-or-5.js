// ❗ Description:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

// ✅ SOLUTION:

function solution (number) {
   let sum=0;

   if (number<3) sum;

   let three=Math.trunc(number/3);
   let five=Math.trunc(number/5);

   for(let i=1;i<=three;i++){
      sum+=3*i;
      console.log(sum);
      
   }

   for(let i=1;i<=five;i++){
      sum+=5*i;
   }
   return sum;
}