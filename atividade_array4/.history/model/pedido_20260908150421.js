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
            consol
        }
        concluir() {
            this.#status_pedido = "concluido"
        }
        processar() {
            this.#status_pedido = "processando o pedido"
        }

        get getStatus(){
        return this.status;
        }
}

