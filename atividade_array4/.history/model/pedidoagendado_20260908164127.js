import { pedido } from "./pedido.js";

export class agendado extends pedido {
    constructor(codigo, cliente, descricao, valor, data) {
        super(codigo, cliente, descricao, valor);

        this.data = data;
    }

    processar(){
        console.log(`O pedido ficará pronto para a data ${this.data}.`);
    }

}