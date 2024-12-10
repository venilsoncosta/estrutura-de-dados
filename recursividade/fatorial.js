/*function fatroialRecursivo(n){

	if(n === 1){
		return 1;
	}
	else {
		return n * fatroialRecursivo(n - 1);
	}

}

const testeResultado = fatroialRecursivo(5);
console.log(testeResultado);*/


//---------------------------------------------------------------------------------

/*function fatorialRecursivo(n){
	if(n===1){
		return 1;
	}else{
		return n*fatroialRecursivo(n-1);
	}
}
const testeResultado2=fatorialRecursivo(5);
console.log(testeResultado2);*/



function buscandoUmNumeroNoArray(array2, numero, indice){

	if(indice === array2.length){
		return 'Número não encontrado'
	}

	if(array2[indice] === numero){
		return 'Numero encontrado: ' + numero;
	}

	return buscandoUmNumeroNoArray(array2, numero, indice + 1);

}

const v = [6, 74, 21, 3, 9, 22]

console.log(buscandoUmNumeroNoArray(v, 9, 0))


