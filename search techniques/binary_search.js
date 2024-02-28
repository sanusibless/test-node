import numbers from '../numbers.js'

function binarySearch(arr,target) {
	let first = 0;
	let last  = arr.length - 1;
	while(first <= last) {
		let mid = Math.floor((first+last) / 2);
		if(arr[mid] == target) {
			return mid;
		} else if(arr[mid] < target) {
			first = mid+1;
		} else {
			last = mid-1;
		}
	}

	return -1;
}

let ans = binarySearch(numbers, 40);
console.log(ans)
ans = binarySearch(numbers,15);
console.log(ans)