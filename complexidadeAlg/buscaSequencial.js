
function buscaSequencial(elemento, array){

	for(let i = 0; i < array.length; i++){
		if(array[i] === elemento){
			return i;
		}
	}
	return -1;

}

const loui = [23, 56, 87, 9, 98, 54, 34]
console.log(buscaSequencial(54, loui))