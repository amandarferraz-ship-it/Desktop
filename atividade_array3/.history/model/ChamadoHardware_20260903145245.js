import { Chamado } from "./chamado.js";

export class extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    mover() {
        return `A moto ${this.marca} ${this.modelo} está se deslocando sobre duas rodas.`;
    }
}
