function bubbleSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let swapped = false;
        for(let j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true
            }
        }
        if(!swapped) {
            break;
        }
    }
    console.log(arr);
}
// Time Complexity = O(n ^ 2);
// Space Complexity = O()
bubbleSort([64, 34, 25, 12, 22, 11, 90, 5]);
