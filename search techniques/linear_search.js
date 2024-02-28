import numbers from "./numbers.js"

function linearSearch(arr, target) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] == target) return i;
	}
	return -1;
}

console.log(linearSearch(numbers, 40));

console.log(linearSearch(numbers,15));
