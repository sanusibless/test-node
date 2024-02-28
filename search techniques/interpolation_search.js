import numbers from "../numbers.js"

function interpolationSearch(arr,target) {
	let low = 0;
	let high = arr.length-1;

	while(low<=high && target >= arr[low] && target <= arr[high]) {
		if(low === high) {
			if(arr[low] === target) {
				return low
			}
		}

		// defining the interpolation position

		let pos = Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low))
		
		if(arr[pos] === target) {
			return pos
		} else if(arr[pos] < target) {
			low = pos +1;
		} else {
			high = pos -1;
		}		
	}

	return -1;
}

console.log(interpolationSearch(numbers,40));
console.log(interpolationSearch(numbers,15));