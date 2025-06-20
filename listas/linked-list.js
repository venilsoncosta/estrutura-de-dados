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

	// Código mais conciso e uso de '==='
	estaVazia = () => {
		return this.head === null;
	}

	// Lógica simplificada que cobre todos os casos
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
		this.size++; // Incrementa o tamanho uma vez só
	}

	// --> Sugestão 4: Validação de índice mais robusta
	addNaPosicao = (index, elemento) => {
		// Valida se o índice está dentro dos limites (0 até o tamanho atual)
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
		console.log(elementos.join(" -> ")); // Alterei para '->' para diferenciar da sua saída original
	}

	pega = (index) => {
		let atual = this.pegaNode(index);
		if (atual) {
			return atual.value;
		}
		return null; // Retorna null se não encontrar
	}

	pegaNode = (index) => {
		// --> Sugestão 3: Correção na validação do limite do índice
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

console.log("\nPegando o elemento na posição 2:", linkedList.pega(2)); // Deverá ser 9

console.log("\nAdicionando elementos em posições específicas:");
linkedList.addNaPosicao(2, 7); // Adiciona 7 entre 20 e 9
linkedList.exibirLista();

linkedList.addNaPosicao(0, 777); // Adiciona no início
linkedList.exibirLista();

linkedList.addNaPosicao(7, 999); // Adiciona no final (índice igual ao tamanho)
linkedList.exibirLista();

console.log(linkedList.tamanhoLista())

linkedList.addNaPosicao(10, 1010); // Tentativa de adicionar em índice inválido