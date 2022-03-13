const number = 123456789;

// function NumberOfDigits(number) {
//     return number.toString().length;
// }

function NumberOfDigits(number) {
    let count = 0;

    while (true) {
        if (number === 0) {
            break;
        }

        count++;

        number = Math.round(number / 10);
    }

    return count;
}

const numberOfDigits = NumberOfDigits(number);

console.log(numberOfDigits);
