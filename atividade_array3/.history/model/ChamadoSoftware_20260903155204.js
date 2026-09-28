import { Chamado } from "./chamado.js";

export class chamado extends ChamadoHardware {
    constructor(titulo, setor, prioridade ) {
        super(titulo,setor,prioridade);
        this.equipamentos = equipamentos;
    }

    atender() {
        throw new Error('O método vai ser fisicamente implementado')
    }
        
    }