//Elevando ao quadrado os números do array e depois ordenando eles

const ordenandoNumeros = (numeros) => {
    const resultado = [];

    for(let value of numeros) {
        resultado.push(Math.pow(value, 2))
    }
    resultado.sort((a, b) => a - b);

    return resultado;
}

console.log(ordenandoNumeros([5, 2, 4, 12, 10, 8]))
