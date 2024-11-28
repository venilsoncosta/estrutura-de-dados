
function fatorial(n){

	let total = 1;

	for(let i = 1; i <= n; i++){
		total = total * i;
	}
	return total;

}

const resultado = fatorial(5)
console.log(resultado);

//fazendo com recursividade

function fatroialRecursivo(n){

	if(n === 1){
		return 1;
	}
	else{
		return n * fatroialRecursivo(n - 1);
	}

}

const testeResultado = fatroialRecursivo(5);
console.log(testeResultado);
