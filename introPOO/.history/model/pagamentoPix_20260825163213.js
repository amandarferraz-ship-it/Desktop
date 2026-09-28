import { pagamento } from "./pagamento.js";

export class PagamentoPix extends pagamento{

    constructor(valor, chavePix){
        super(valor)
        
        this.chavePix = chavePix;
    }

    processar(){
        console.log(
            `Pix no valor R$${this.getValor().to} para a chave pix ${this.chavePix} realizado`
        );
    }

}