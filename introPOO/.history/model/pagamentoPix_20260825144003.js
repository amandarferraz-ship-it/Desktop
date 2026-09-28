import { pagamento } from "./pagamento";

export class pagamentoPix extends pagamento{

    constructor(valor, chavePix){
        super(valor)
        
        this.chavePix = chavePix;
    }

    processar(){
        console.log(
            `{Pix no valor ${valor} para a chave pix $`
        )
    }

}