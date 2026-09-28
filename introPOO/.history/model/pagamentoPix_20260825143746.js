import { pagamento } from "./pagamento";

export class pagamentoPix extends pagamento{

    constructor(valor, chavePix){
        super(valor)
        
        this.chavePix - chavePix;

    }

    processar(){
        
    }

}