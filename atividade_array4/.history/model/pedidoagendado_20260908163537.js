import { pedido } from "./pedido.js";

export class pedidoagendado extends pedido {
    constructor(codigo, cliente, descricao, valor) {
        super(codigo, cliente, descricao, valor);
        this.data = data;
    }

    processar(){
        
    }
}