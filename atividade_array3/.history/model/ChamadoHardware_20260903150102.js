import { Chamado } from "./chamado.js";

export class chamado extends ChamadoHardware {
    constructor(titulo, setor, prioridade ) {
        super(titulo,setor,prioridade);
        this.equipamentos = equipamentos;
    }

    atender() {
        return `A moto ${this.marca} ${this.modelo} está se deslocando sobre duas rodas.`;
    }
}
