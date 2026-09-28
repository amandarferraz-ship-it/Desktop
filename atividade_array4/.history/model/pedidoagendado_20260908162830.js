import { pedido } from "./chamado.js";

export class ChamadoHardware extends Chamado {
    constructor(titulo, setor, prioridade ) {
        super(titulo,setor,prioridade);
        this.equipamentos = equipamentos;
    }