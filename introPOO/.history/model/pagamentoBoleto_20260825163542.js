import { pagamento} from "./pagamento.js";

export class PagamentoBoleto extends pagamento{

    constructor(Valor, numeroBoleto){
        super(Valor);

        if (numeroBoleto <= 0 ){
            throw new Error ('o numero do boleto deve ser informado');
        }
        this.numeroBoleto = numeroBoleto;
    }

    processar(){
        console.log(
            `Pagamento pelo boleto ${this.numeroBoleto} no valor de R$${this.getValor().toFixed(2)} realizado!\n`
        );
    }
}
