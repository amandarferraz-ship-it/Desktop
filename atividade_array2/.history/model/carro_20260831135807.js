import { Veiculo } from "./model/Veiculo.js";

export class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    mover() {
        return `O carro ${this.marca} ${this.modelo} está se deslocando pela estrada.`;
    }
}
