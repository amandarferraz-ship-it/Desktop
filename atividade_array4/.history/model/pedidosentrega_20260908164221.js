import { pedido } from "./pedido.js";

export class entrega extends pedido {
    constructor(codigo, cliente, descricao, valor, endereco) {
        super(codigo, cliente, descricao, valor);
        this.endereco = endereco;
    }

    processar(){
        console.log(`O pedido será entregue no endereço  ${this.data}.`);
    }
    
}