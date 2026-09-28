import { pedido } from "./pedido.js";

export class ChamadoHardware extends Chamado {
    constructor(titulo, setor, prioridade ) {
        super(titulo,setor,prioridade);
        this.equipamentos = equipamentos;
    }