import numbers from "../numbers.js"

function recursiveBinarySearch(arr,target,first=0,last = arr.length-1) {
	if(first<=last) {
		let mid = Math.floor((first+last) / 2);
		if(arr[mid] == target) {
			return mid;
		} else if (arr[mid] < target) {
			return recursiveBinarySearch(arr,target,mid+1,last)
		} else {
			return recursiveBinarySearch(arr,target,first, mid-1)
		}
	}
	return -1;	
}

let ans = recursiveBinarySearch(numbers, 40);
console.log(ans)
ans = recursiveBinarySearch(numbers,15);
console.log(ans)