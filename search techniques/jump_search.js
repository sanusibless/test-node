import numbers from "./numbers.js"

function jumpSearch(arr,target) {
	let n = arr.length;
	let step = Math.floor(Math.sqrt(n));
	let prevStep = 0;

	while(arr[Math.min(step,n)] < target) {
		prevStep = step;
		step += Math.floor(Math.sqrt(n));
		if(prevStep >= n) {
			return -1
		} 
	}

	for (var i = prevStep; i < Math.max(step,n); i++) {
	 	if(arr[i] == target) {
	 		return i;
	 	}
	 }

	return -1; 
}

console.log(jumpSearch(numbers,40));
console.log(jumpSearch(numbers,15));
