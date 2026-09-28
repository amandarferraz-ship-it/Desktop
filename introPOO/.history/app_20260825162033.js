import { PagamentoCartao } from "./model/pagamentocartao.js";
import { PagamentoPix } from "./model/pagamentoPix.js";
import { PagamentoBoleto } from "./model/pagamentoBoleto.js";


const pagamentoCartao = new PagamentoCartao(
    150,
    123456789

)
const pagamentoPix = new PagamentoPix(
    300,
    "pix@gmail.com"

)
const pagamentoBoleto = new PagamentoBoleto(
    456,
    6787965432
)


pagamentoCartao.processar();
pagamentoPix.processar();