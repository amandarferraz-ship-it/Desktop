export class chamado {
        constructor(título,setor,prioridade,status){

            this.título = título,
            this.setor = setor,
            this.prioridade = prioridade,
            this.status = status
        }

    frear (valor){
        if(valor <= 0){
        throw new Error("o valor precisa ser maior que zero")
        }
        
    }

    reabrir(){
        if(valor <= 0){
        throw new Error("o valor precisa ser maior que zero")
        }
        this.#velocidade -= valor;
        if(this.#velocidade < 0){
            this.#velocidade = 0;
        }

    }

    mover(){
        throw new Error("A clase filha deve implementar o metodo mover")
    }

    get getVelocidade(){
    return this.#velocidade;
    }
    }