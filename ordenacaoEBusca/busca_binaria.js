const busca_binaria = (nums, chave) => {

	let inicio = 0;
	let meio;
	let final = nums.length - 1;

	while (inicio < final){
		meio = Math.floor((inicio + final) / 2);
		if (chave < nums[meio]){
			final = meio - 1;
		}
		else if (chave > nums[meio]){
			inicio = meio + 1;
		}
		else {
			return meio;
		}

	}
	return -1;

}

console.log(busca_binaria([1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11], 10));
