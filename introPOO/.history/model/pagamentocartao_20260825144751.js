import { pagamento} from "./pagamento";

export class pagamentoCartao extends pagamento{

    constructor(Valor, numeroCartao){
        super(valor);

        if (numeroCartao <= 0 )
{}

    }
}
