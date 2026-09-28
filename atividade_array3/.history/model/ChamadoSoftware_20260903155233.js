import { chamado, Chamado } from "./chamado.js";

export class ChamadoSoftware extends chamado{
    constructor(titulo, setor, prioridade ) {
        super(titulo,setor,prioridade);
        this.equipamentos = equipamentos;
    }

    atender() {
        throw new Error('O método vai ser fisicamente implementado')
    }
        
    }