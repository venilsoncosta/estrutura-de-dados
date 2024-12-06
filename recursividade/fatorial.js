function fatroialRecursivo(n){

	if(n === 1){
		return 1;
	}
	else {
		return n * fatroialRecursivo(n - 1);
	}

}

const testeResultado = fatroialRecursivo(5);
console.log(testeResultado);


//---------------------------------------------------------------------------------

function fatorialRecursivo(n){
	if(n===1){
		return 1;
	}else{
		return n*fatroialRecursivo(n-1);
	}
}
const testeResultado2=fatorialRecursivo(5);
console.log(testeResultado2);
