export class pagamento {
    #valor;

    constructor(valor) {
        if(valor < 0){
            throw new Eror ('o valor deve ser maior que 0');
        }

        this.#valor = valor;

    };
}