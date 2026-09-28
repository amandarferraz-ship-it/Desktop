export class pagamento {
    #valor;

    constructor(valor) {
        if(valor < 0){
             throw  new error('o valor deve ser maior que 0');
        }

    }
}