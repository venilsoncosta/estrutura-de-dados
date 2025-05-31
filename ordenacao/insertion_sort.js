const insertion_sort = (nums) => {
	const N = nums.length;
	for (let i = 1; i < N; i++) {
		const aux = nums[i];
		let j = i - 1;
		while (j >= 0 && nums[j] > aux){
			nums[j + 1] = nums[j];
			j -= 1;
		}
		nums[j + 1] = aux;
	}
	return nums;
}

console.log(insertion_sort([20, 9, 86, -2, 16]));
//console.log(insertion_sort(nums));