import { pedido } from "./pedido.js";

export class pedidoagendado extends ped {
    constructor(titulo, setor, prioridade ) {
        super(titulo,setor,prioridade);
        this.equipamentos = equipamentos;
    }