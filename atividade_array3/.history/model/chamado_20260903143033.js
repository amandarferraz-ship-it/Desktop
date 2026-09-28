export class chamado {
        constructor(título,setor,prioridade,status){

            this.título = título,
            this.setor = setor,
            this.prioridade = prioridade,
            this.status = "aberto"
        }

    frear (valor){
        if(valor <= 0){
        throw new Error("o valor precisa ser maior que zero")
        }
        
    }

    reabrir(){
       
    }