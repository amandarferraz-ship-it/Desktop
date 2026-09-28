export class pagamento {
    #valor;

    constructor(valor) {
        if(valor < 0){
         throw 'o valor deve ser maior que 0';
        }

    }
}