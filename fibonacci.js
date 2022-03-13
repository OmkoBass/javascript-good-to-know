function fibonacci(iterations) {
    if (iterations < 0) {
        return 1;
    }

    return fibonacci(iterations - 1) + fibonacci(iterations - 2);
}

const sum = fibonacci(3);

console.log(sum);

let iter = 3;
let iterSum = 0;
let x = 1;
let y = 1;

while (iter >= 0) {
    iterSum = x + y;

    x = y;
    y = iterSum;

    iter--;
}

console.log(iterSum);
