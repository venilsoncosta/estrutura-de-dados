
const busca_binaria_recursiva = (nums, key, low, high) => {

	if(low > high){
		return -1;
	}

	const middle = Math.floor((low + high) / 2);

	if (key === nums[middle]){
		return middle;
	}
	else if(key < nums[middle]){
		return busca_binaria_recursiva(nums, key, low, middle -1);
	}
	else{
		return busca_binaria_recursiva(nums, key, middle + 1, high);
	}
}

console.log(busca_binaria_recursiva([1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11], 3, 0, 11));