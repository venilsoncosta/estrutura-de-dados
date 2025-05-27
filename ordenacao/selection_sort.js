const selection_sort = (nums) => {
	const N = nums.length;
	for(let i = 0; i < N - 1; i++){
		let minIndex = i;
		for(let j = i + 1; j < N; j++){
			if(nums[j] < nums[minIndex])
				minIndex = j;
		if (minIndex != i)
			swap(nums, i, minIndex);
		}
	}
	return nums;
};

const swap = (nums, a, b) => {
	const aux = nums[a];
	nums[a] = nums[b];
	nums[b] = aux;
};

console.log(selection_sort([20, 9, 86, -2, 16]));
