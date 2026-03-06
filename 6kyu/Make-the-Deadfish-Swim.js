// ❗ Description:
// Create a parser to interpret and execute the Deadfish language.
//
//     Deadfish operates on a single value in memory, which is initially set to 0.
//
// It uses four single-character commands:
//
//     i: Increment the value
// d: Decrement the value
// s: Square the value
// o: Output the value to a result array
// All other instructions are no-ops and have no effect.
//
//     Examples
// Program "iiisdoso" should return numbers [8, 64].
//     Program "iiisdosodddddiso" should return numbers [8, 64, 3600].
// ✅ SOLUTION:

function parse(data) {
    const resultArr = []
    let val = 0
    for (let j = 0; j < data.length; j++) {
        switch (data[j]) {
            case "i":
                val += 1
                continue
            case "d":
                val -= 1
                continue
            case "s":
                val *= val
                continue
            case "o":
                resultArr.push(val)
                continue
            default:
                continue
        }
    }
    return resultArr; // your code here
}

console.log(parse("iiisdosodddddiso"))