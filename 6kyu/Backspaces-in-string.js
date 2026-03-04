// ❗ Description:
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
//
// Your task is to process a string with "#" symbols.
//
//     Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""
// ✅ SOLUTION:

function cleanString(s) {
    let result = [];

    for (let j = 0; j < s.length; j++) {
        if(s[j]==='#') {result.pop(); continue;}
        result.push(s[j]);
    }
    if(result.length===0) return ""
    return result.join('');
}

