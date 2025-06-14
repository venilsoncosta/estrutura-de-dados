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
}

let linkedList = new LinkedList();

linkedList.addNoFinal(20);
linkedList.addNoFinal(9);
linkedList.addNoFinal(16);
linkedList.addNoFinal(86);

linkedList.exibirLista();
