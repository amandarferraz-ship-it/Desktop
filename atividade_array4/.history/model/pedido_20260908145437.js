export class pedido {
    #status_pedido;

    constructor(codigo, cliente, descricao, valor) {
        this.codigo = codigo;
        this.cliente = cliente;
        this.descricao = descricao;
        this.valor = valor;
        this.#status_pedido = "Recebido"
    }

        inciar(){
            this.#status_pedido = "iniciar"
        }
        concluir() {
            this.#status_pedido = "concluir"
        }
        processar() {}
    
}

