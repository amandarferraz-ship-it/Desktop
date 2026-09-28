import { pagamento} from "./pagamento";

export class pagamentoCartao extends pagamento{

    constructor(Valor, numeroCartao){
        super(Va)

        if (numeroCartao <= 0 ){
            throw new Error ('o numero do cartao deve ser informado');
        }
        this.numeroCartao = numeroCartao;
    }

    processar(){
        console.log(
            `pagamento pelo cartão ${this.numeroCartao} no valor de ${this.valor} realizado`
        );
    }
}
