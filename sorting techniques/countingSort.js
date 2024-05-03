function countingSort(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let count =  Array(max-min + 1).fill(0);
    let output = [];

    for(let num of arr) {
        count[num - min]++;
    }

    for(let i = 0; i < count.length; i++) {
        while(count[i] > 0) {
            output.push(i + min);
            count[i]--;
        }
    }

    console.log(output);
}

countingSort([4, 2, 2, 8, 3, 3, 1]);

// TIme complexity O(n+k).