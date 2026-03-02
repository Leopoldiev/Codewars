// ❗ Description:
// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
//
//     Valid inputs examples:
//     Examples of valid inputs:
//     1.2.3.4
// 123.45.67.89
// Invalid input examples:
//     1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
//     Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string
// ✅ SOLUTION:

function isValidIP(str) {
    let arr = str.split('.')
    if (arr.length !== 4) return false
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) < 0 || parseInt(arr[i]) > 255 ) return false
        if (!parseInt(arr[i]) && parseInt(arr[i]) !== 0) return false;

        const len = arr[i].length

        const parsedLen = String(parseInt(arr[i])).length

        if (len !== parsedLen) return false
    }
    return true;
}