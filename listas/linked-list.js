class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	tamanhoLista = () => {
		return this.size;
	}


	estaVazia = () => {
		return this.head === null;
	}


	addNoInicio = (elemento) => {
		const node = new Node(elemento);
		node.next = this.head;
		this.head = node;
		this.size++;
	}

	addNoFinal = (elemento) => {
		const node = new Node(elemento);
		if (this.estaVazia()) {
			this.head = node;
		} else {
			let atual = this.head;
			while (atual.next) {
				atual = atual.next;
			}
			atual.next = node;
		}
		this.size++;
	}


	addNaPosicao = (index, elemento) => {

		if (index < 0 || index > this.size) {
			console.error(`Erro: Índice ${index} é inválido para uma lista de tamanho ${this.size}.`);
			return;
		}

		if (index === 0) {
			this.addNoInicio(elemento);
			return;
		}

		const node = new Node(elemento);
		let noAnterior = this.pegaNode(index - 1);

		node.next = noAnterior.next;
		noAnterior.next = node;
		this.size++;
	}

	exibirLista = () => {
		let noAtual = this.head;
		let elementos = [];
		while (noAtual != null) {
			elementos.push(noAtual.value);
			noAtual = noAtual.next;
		}
		console.log(elementos.join(" -> "));
	}

	pega = (index) => {
		let atual = this.pegaNode(index);
		if (atual) {
			return atual.value;
		}
		return null;
	}

	contemElemento = (elemento) => {
		let indexElemento = this.pegaIndex(elemento);
		if (indexElemento !== -1){
			return true;
		}
		return false;
	}

	//pegando o indice do elemtno passado como parametro
	pegaIndex = (elemento)  => {
		let atual = this.head;
		let i = 0;
		while (atual){
			if (atual.value === elemento){
				return i;
			}
			atual = atual.next;
			i++;
		}
		return -1;
	}

	removeNaPosicao = (index) => {
		if (this.estaVazia() || !this.pegaIndex(index)){
			return null;
		}

		let item = null;
		let aux = null;

		if (index === 0){
			item = this.head.value;
			this.head = this.head.next;
			this.size--;
			return item;
		}

		if (index === this.tamanhoLista() - 1){
			item = this.pega(index);
			aux = this.pegaNode(index - 1);
			aux.next = null;
			this.size--;
			return item;
		}

		aux = this.pegaNode(index - 1);
		item = aux.next.value;
		aux.next = aux.next.next;
		this.size--;
		return item;
	}

	//pegando o valor de um index passado por parâmetro
	pegaNode = (index) => {

		if (index < 0 || index >= this.size) {
			return null;
		}

		let atual = this.head;
		for (let i = 0; i < index; i++) {
			atual = atual.next;
		}
		return atual;
	}
}

// --- Testes ---
let linkedList = new LinkedList();

linkedList.addNoFinal(20);
linkedList.addNoFinal(9);
linkedList.addNoFinal(16);
linkedList.addNoFinal(86);

console.log("Lista inicial:");
linkedList.exibirLista();

console.log("\nAdicionando 100 no início:");
linkedList.addNoInicio(100);
linkedList.exibirLista();

console.log("\nPegando o elemento na posição 2:", linkedList.pega(2));

console.log("\nAdicionando elementos em posições específicas:");
linkedList.addNaPosicao(2, 7);
linkedList.exibirLista();

linkedList.addNaPosicao(0, 777);
linkedList.exibirLista();

linkedList.addNaPosicao(7, 999);
linkedList.exibirLista();

console.log(linkedList.tamanhoLista())

linkedList.addNaPosicao(10, 1010);

console.log("O elemento 20 está na lista? ", linkedList.contemElemento(20));

console.log("Imprime lista")
linkedList.exibirLista();
console.log("Removendo na posição 2:",linkedList.removeNaPosicao(2))
linkedList.exibirLista();