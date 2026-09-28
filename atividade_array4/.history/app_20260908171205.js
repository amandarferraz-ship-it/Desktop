import { pedido } from "../model/pedido.js";
import { agendado } from "../model/pedidoagendado.js";
import { retirada } from "../model/pedidoretirada.js";
import { entrega } from "../model/pedidosentrega.js";

import { cadastrar } from "./repository/pedidorepository.js";


const pedido1 = new agendado(
    1, 
)