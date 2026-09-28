import { PagamentoCartao } from "./model/pagamentocartao.js";
import { pagamento} from "./pagamento.js";

export class PagamentoCartao extends pagamento{

    constructor(Valor, numeroCartao){
        super(Valor);

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

const pagamentoCartao = new PagamentoCartao(
    150,
    123456789

)
const pagamentoPix = new PagamentoPix(
    300,
    "pix@gmail.com"

)

pagamentoCartao.processar();
pagamentoPix.processar();