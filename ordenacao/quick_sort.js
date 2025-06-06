const quick_sort = (nums, left, right) => {
	if( left < right){
		let pivot = partition(nums, left, right);
		quick_sort(nums, left, pivot - 1);
		quick_sort(nums, pivot + 1, right)
	}
	return nums;
};

const partition = (nums, left, right) => {
	let pivot = nums[right];
	let i = left;
	for (let j = left; j < right; j++){
		if (nums[j] <= pivot){
			swap(nums, j, i);
			i = i + 1;
		}
	}
	swap(nums, i, right)
	return i;
}

const swap = (nums, a, b) => {
	const aux = nums[a];
	nums[a] = nums[b];
	nums[b] = aux;
}
let ordenacao = quick_sort([20, -2, 8, 17, 1, 55, 33, 3], 0, 7)
console.log(ordenacao);