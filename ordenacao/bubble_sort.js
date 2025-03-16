const bubbleSort = (nums) => {
    const N = nums.length;
    for(let i = 0; i < N; i++) {
        let swapped = false;
        for(let j = 0; j < N - 1 -i; j++) {
            if(nums[j] > nums[j + 1]){
                const aux = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = aux;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return nums;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([300, 56, 7, 17, 94, 1882, -4]));

