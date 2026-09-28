import { pedido } from "./pedido.js";

export class pedidoagendado extends Chamado {
    constructor(titulo, setor, prioridade ) {
        super(titulo,setor,prioridade);
        this.equipamentos = equipamentos;
    }