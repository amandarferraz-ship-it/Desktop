import { PagamentoCartao, pagamentoCartao } from "./model/pagamentocartao.js";
import { pagamentoPix } from "./model/pagamentoPix.js";

const pagamentoCartao = new PagamentoCartao(
    150,
    123456789

)
const pagamentoPix = new pagamentoPix(
    300,
    "pix@gmail.com"

)

pagamentoCartao.procesar();
pagamentoPix.processar();