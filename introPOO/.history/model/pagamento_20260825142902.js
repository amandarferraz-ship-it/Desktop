export class pagamento {
    #valor;

    constructor(valor) {
        if(valor < 0){
            throw ror ('o valor deve ser maior que 0');
        }

        this.#valor = valor;

    };
}