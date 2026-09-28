import { Chamado } from "./chamado.js";

export class chamado extends ChamadoSoftware {
    constructor( ) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    mover() {
        return `A moto ${this.marca} ${this.modelo} está se deslocando sobre duas rodas.`;
    }
}
