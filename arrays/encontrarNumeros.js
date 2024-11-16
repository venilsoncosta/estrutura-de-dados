//O desafio é encontrar número par com dois dígitos

const encontrarNumeros = (numeros) => {
    let contadorNumeroPar = 0;

    for(let valor of numeros){
        let numerosDigitos = valor.toString().length;
        if(numerosDigitos % 2 === 0){
            contadorNumeroPar++;
        }
    }
    return contadorNumeroPar;
}

console.log(encontrarNumeros([12, 345, 2, 6, 7896]))