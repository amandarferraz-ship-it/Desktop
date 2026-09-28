import { pagamento } from "./pagamento.js";

export class PagamentoPix extends pagamento{

    constructor(valor, chavePix){
        super(valor)
        
        this.chavePix = chavePix;
    }

    processar(){
        console.log(
            `Pix no valor RS${this.getValor()} para a chave pix ${this.chavePix} realizado`
        );
    }

}