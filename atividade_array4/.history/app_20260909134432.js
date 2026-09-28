import { pedido } from '../model/pedido.js';
import { agendado } from '../model/pedidoagendado.js";
import { retirada } from "../model/pedidoretirada.js";
import { entrega } from "../model/pedidosentrega.js";

import { cadastrarPedidos, atualizarPedidos, deletarPedido, listarPedidos } from "../controller/pedidocontroller.js";

const pedido1 = new agendado(
    1,
    "Amanda", 
    "Body Splash",
    23.50, 
    "12/10/2026"
);

cadastrarPedidos(pedido1);

listarPedidos();