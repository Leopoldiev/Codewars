// ❗ Description:

// Complete the solution so that the function will break up camel casing, using a space between words.
//
//     Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// ✅ SOLUTION:
function solution(string) {
    let resultStr=''
    let j=0
    for (let i = 0; i < string.length; i++) {
        if(string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91){

            resultStr += string.substring(j, i)+' ';
            console.log(resultStr)
            j=i;
        }

    }
    resultStr += string.substring(j, string.length);
    return resultStr;
}
