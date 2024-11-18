

const mergeArray = (numeros1, m, numeros2, n) => {
    for (let i = 0; i < n; i++){
        numeros1[m + i] = numeros2[i];
    }
    numeros1.sort((a, b) => a - b)
}

const numeros1 = [1, 2, 3, 0, 0, 0]
const numeros2 = [7, 4, 9]

mergeArray(numeros1, 3, numeros2, 3)

console.log(numeros1)