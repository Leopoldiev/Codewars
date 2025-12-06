// ❗ Description:

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
//     For example, a tower with 3 floors looks like this:
//
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]

// ✅ SOLUTION:

function towerBuilder(nFloors) {
    const result = [];

    for (let i = 1; i <= nFloors; i++) {
        const stars = '*'.repeat(2 * i - 1);
        const spaces = ' '.repeat(nFloors - i);
        result.push(spaces + stars + spaces);
    }

    return result;

}