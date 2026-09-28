import { pagamento} from "./pagamento.js";

export class PagamentoBoleto extends pagamento{

    constructor(Valor, numeroBoleto){
        super(Valor);

        if (numeroBoleto <= 0 ){
            throw new Error ('o numero do boleto deve ser informado');
        }
        this.numeroCartao = numeroCartao;
    }

    processar(){
        console.log(
            `pagamento pelo cartão ${this.numeroCartao} no valor de ${this.valor} realizado`
        );
    }
}
