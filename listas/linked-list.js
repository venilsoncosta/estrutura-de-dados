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

	tamanhoLista = ()=> {
		return this.size;
	}

	estaVazia = () => {
		if (this.head == null){
			return true;
		}
		return false;
	}

	addNoInicio = (elemento) => {
		const node = new Node(elemento);
		if(this.head == null){
			this.head = node;
			this.size++;
			return;
		}
		const aux = this.head;
		this.head = node;
		node.next = aux;
		this.size++;
	}

	addNoFinal = (elemento) => {
		const node = new Node(elemento);
		if (this.head == null) {
			this.head = node;
			this.size++;
			return;
		}
		let atual = this.head;
		while (atual.next) {
			atual = atual.next;
		}
		atual.next = node;
		this.size++;
	}

	exibirLista = () => {
		let noAtual = this.head;
		while (noAtual != null) {
			console.log(noAtual.value);
			noAtual = noAtual.next;
		}
	}

	pega = (index) => {
		let atual = this.pegaNode(index);
		if (atual){
			return atual.value;
		}
		return null;
	}

	pegaNode = (index) => {
		if (index < 0 || index > this.tamanhoLista()){
			return null;
		}
		let atual = this.head;
		let i = 0;
		while (i !== index){
			atual = atual.next;
			i++;
		}
		if (atual){
			return atual;
		}
		return null;
	}
}

let linkedList = new LinkedList();

linkedList.addNoFinal(20);
linkedList.addNoFinal(9);
linkedList.addNoFinal(16);
linkedList.addNoFinal(86);0

linkedList.exibirLista();

/*console.log("Tamanho da lista ",linkedList.tamanhoLista())

console.log("Lista está vazia? ", linkedList.estaVazia())*/

linkedList.addNoInicio(7);
linkedList.exibirLista();
console.log(linkedList.pega(2))