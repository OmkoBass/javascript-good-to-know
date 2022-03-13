const user = {
    name: "Tony the Tiger",
    age: 22,
    isEngineer: true,
    address: {
        street: "NW St",
        streetNumber: "20th",
        city: "Miami",
        country: "USA",
        state: "Florida"
    }
}

function flatten(obj) {
    Object.keys(obj).map(key => {
        if (obj[key] !== null && typeof obj[key] === 'object') {
            obj = { ...obj, ...flatten(obj[key]) };
            delete obj[key];
        }
    });

    return obj;
}


const flattened = flatten(user);

console.log(flattened);
