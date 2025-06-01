const merge_sort = (nums, inicio, fim) => {
	if (inicio < fim){
		let meio = Math.floor((inicio + fim) / 2);
		merge_sort(nums, inicio, meio);
		merge_sort(nums, meio + 1, fim);
		merge(nums, inicio, meio, fim);
	}
	return nums
}

const merge = (nums, inicio, meio, fim) => {
	const resultado = [];
	let tamanho = fim - inicio + 1;
	let i = inicio;
	let j = meio + 1;
	let k = 0;

	while (i <= meio && j <= fim){
		if (nums[i] < nums[j]){
			resultado[k++] = nums[i++];
		}
		else{
			resultado[k++] = nums[j++];
		}
	}

	while (i <= meio){
		resultado[k++] = nums[i++];
	}

	while (j <= fim){
		resultado[k++] = nums[j++];
	}

	for (let i = 0; i < tamanho; i++){
		nums[inicio + i] = resultado[i];
	}
}

console.log(merge_sort([20, -2, 8, 17, 1, 55, 33, 3], 0, 7));








