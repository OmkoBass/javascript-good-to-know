// For our first problem, we would like to “rotate” a list, or move elements forward in a list by a number of spaces, k.
// Elements at the greatest index will “wrap around” to the beginning of the list.

// list = ['a', 'b', 'c', 'd', 'e', 'f']
// rotate(list, 0)
// # ['a', 'b', 'c', 'd', 'e', 'f']
// rotate(list, 1)
// # ['f', 'a', 'b', 'c', 'd', 'e']
// rotate(list, 3)
// # ['d', 'e', 'f', 'a', 'b', 'c']

function moveByOne(list) {
    let newList = [];

    newList = list.slice(0, -1);

    newList.unshift(list[list.length - 1]);

    return newList;
}

function rotate(list, number) {
    for (let i = 0; i < number; i++) {
        list = moveByOne(list);
    }

    return list;
}


list = ['a', 'b', 'c', 'd', 'e', 'f']

const movedList = rotate(list, 1);

console.log(movedList);
