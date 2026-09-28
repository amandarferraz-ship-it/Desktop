import { pedido } from "./pedido.js";

export class entrega extends pedido {
    constructor(codigo, cliente, descricao, valor) {
        super(codigo, cliente, descricao, valor);
        this.endereco =;
    }

    processar(){
        console.log(`O pedido ficará pronto para a data ${this.data}.`);
    }
    
}