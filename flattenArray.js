const grades = [[5, 6, 7], [5, 6, 9], [5, 5, 5, 10]];

const flatArray = [].concat(...grades);

console.log(flatArray);

const sum = flatArray.reduce((prev, current) => {
    return prev + current
})

console.log(sum);
