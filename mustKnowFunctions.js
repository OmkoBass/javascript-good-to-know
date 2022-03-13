const weather = [
    {
        type: 'sunny',
        degrees: 22
    },
    {
        type: 'hot',
        degrees: 30
    },
    {
        type: 'rainy',
        degrees: 15
    },
]

// Return an array of modified objects
const doubleTemperature = weather.map(weather => {
    weather.degrees *= 2;
})

// Returns an element if condition is true
// it will return an array of objects that 
// have type as 'sunny'
const sunnyDays = weather.filter(weather => weather.type === 'sunny');

const totalDegrees = weather.reduce((totalDegrees, weather) => {
    return totalDegrees + weather.degrees;
}, 0);

console.log(`Combined degrees: ${totalDegrees}`);

// Some return true if the condition is true
if (weather.some(weather => weather.type === 'hot')) {
    console.log("There will be hot weather.");
}

// Every returns true if every item has a true condition
if (weather.every(weather => weather.degrees > 20)) {
    console.log('Every day will be hotter than 20 degrees.')
} else {
    console.log('Not every day will be hotter than 20 degrees.')
}

// Creating a matrix using Array and fill
const matrix = Array(3).fill(0).map(_ => Array(3).fill(0));

console.log(matrix);
