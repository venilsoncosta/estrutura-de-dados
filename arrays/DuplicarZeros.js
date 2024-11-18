
const duplicarZeros = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        if(array[i] === 0){
            for (let j = array.length - 2; j > i; j--){
                array[j + 1] = array[j];
            }
            array[i + 1] = array[i];
            i = i + 1;
        }
    }
}

let meuArray = [1, 0, 5, 6, 0, 9, 6];

duplicarZeros(meuArray);

console.log(meuArray)