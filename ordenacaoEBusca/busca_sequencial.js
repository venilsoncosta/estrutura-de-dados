const busca_sequencial = (nums, key) => {
	for(let i = 0; i < nums.length; i++){
		if(nums[i] === key){
			return nums[i];
		}
	}
}

console.log(busca_sequencial([2, 5, 67, 745, 90, 126, 65, 5, 42489], 5));