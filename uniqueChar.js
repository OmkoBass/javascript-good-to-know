const input = "loveleetcode";

function findUniqueChar(input) {
    const existingChars = {}

    for (const char of input) {
        if (!existingChars[char]) {
            existingChars[char] = 0;
        }
        existingChars[char] = ++existingChars[char];
    }

    const keys = Object.keys(existingChars);

    for (let i = 0; i < keys.length; i++) {
        if (existingChars[keys[i]] === 1) {
            return i;
        }
    }

    return -1;
}

const uniqueChar = findUniqueChar(input);

console.log(uniqueChar);
