// ❗ Description:
// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
//
//     The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
//
//     Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"
// ✅ SOLUTION:

function toWeirdCase(string) {
    if (string.length === 0) return '';
    let wordsArr = string.toLowerCase().split(' ');
    for (let i = 0; i < wordsArr.length; i++) {
        let str = ''
        for (let j = 0; j < wordsArr[i].length; j++) {
            if (!(j % 2)) {str = str + wordsArr[i][j].toUpperCase(); continue}
            str = str + wordsArr[i][j]
        }
        wordsArr[i]=str
    }

    return wordsArr.join(' ')
}

toWeirdCase("Weird string case")