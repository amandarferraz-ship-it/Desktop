import { pagamento } from "./model/pagamento";
import { pagamentoCartao, pagamentoCartao } from "./model/pagamentocartao";
import { pagamentoPix } from "./model/pagamentoPix";

const pagamentoCartao = new pagamentoCartao(
    150,
    123456789

)
const pagamentoPix = new pagamentoPix(
    300,
    "pix@gmail.com"

)

pagamentoCartao.pro