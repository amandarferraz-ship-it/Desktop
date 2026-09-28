import { pedido } from "./pedido.js";

export class pedidoagendado extends pedido {
    constructor(titulo, setor, prioridade ) {
        super(titulo,setor,prioridade);
        this.equipamentos = equipamentos;
    }