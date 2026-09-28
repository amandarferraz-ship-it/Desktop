import { pedido } from "./pedido.js";

export class retirada extends pedido {
    constructor(codigo, cliente, descricao, valor, nome) {
        super(codigo, cliente, descricao, valor);
        this.nome = nome;
    }

    processar(){
        console.log(`O pedido será retirado pelo responsável por ${this.nome}.`);
    }
    
}