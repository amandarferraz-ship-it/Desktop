export class Veiculo {
    #velocidade;

    constructor(marca, modelo) {
        if (new.target === Veiculo) {
            throw new Error("Veiculo é uma classe abstrata e não pode ser instanciada diretamente.");
        }

        this.marca = marca;
        this.modelo = modelo;
        this.#velocidade = 0;
    }

    acelerar(valor) {
        if (valor > 0) {
            this.#velocidade += valor;
        }
    }

    frear(valor) {
        if (valor > 0) {
            this.#velocidade = Math.max(0, this.#velocidade - valor);
        }
    }

    get velocidade() {
        return this.#velocidade;
    }

    mover() {
        throw new Error("O método mover() deve ser implementado pela classe filha.");
    }
}

