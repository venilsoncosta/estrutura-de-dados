
const contemDuplicados = (numeros) => {
    let isDuplicado = false;
    for(let i = 0; i < numeros.length - 1; i++){
        for (let j = i + 1; j < numeros.length; j++){
            if(numeros[i] === numeros[j]){
                isDuplicado = true;
            }
        }
    }
    return isDuplicado;
}

const n1 = [1, 2, 3, 4, 5,];
const n2 = [1, 2, 3, 4, 4,];

console.log(contemDuplicados(n1));

console.log(contemDuplicados(n2));