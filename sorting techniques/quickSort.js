function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let left = [];
    let right = [];
    let pivot = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([ 12, 8, 9, 3, 11, 5, 4]));
