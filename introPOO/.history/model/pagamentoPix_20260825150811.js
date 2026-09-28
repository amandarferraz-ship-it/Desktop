import { pagamento } from "./pagamento.js";

export class pagamentoPix extends pagamento{

    constructor(valor, chavePix){
        super(valor)
        
        this.chavePix = chavePix;
    }

    processar(){
        console.log(
            `{Pix no valor ${this.valor} para a chave pix ${this.chavePix} realizado`
        );
    }

}