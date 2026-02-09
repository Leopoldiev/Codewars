// ❗ Description:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
//     12 --> "10 + 2"
// 45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.
//
// If you liked this kata, check out part 2!!
// ✅ SOLUTION:

function expandedForm(num) {
    let str=String(num)
    let result=''
    for (let i=0;i<str.length;i++){
        if (str[i]>0){result+=str[i]+'0'.repeat(str.length-(i+1))+' + '}
    }// Your code here
    return result.slice(0,result.length-3)
}