import { Chamado } from "./chamado.js";

export class chamado extends ChamadoHardware {
    constructor(titulo, setor, prioridade ) {
        super(titulo,setor, modelo);
        this.cilindradas = cilindradas;
    }

    mover() {
        return `A moto ${this.marca} ${this.modelo} está se deslocando sobre duas rodas.`;
    }
}
