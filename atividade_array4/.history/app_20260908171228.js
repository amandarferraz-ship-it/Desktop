import { pedido } from "../model/pedido.js";
import { agendado } from "../model/pedidoagendado.js";
import { retirada } from "../model/pedidoretirada.js";
import { entrega } from "../model/pedidosentrega.js";

import { cadastrarPedidos, atualizarPedidos, deletarPedido } from "./controller/pedidocontroller.js";

const pedido1 = new agendado(
    1, 
)