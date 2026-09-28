export class chamado {
    #status
        constructor(título,setor,prioridade,status){

            this.título = título,
            this.setor = setor,
            this.prioridade = prioridade,
            this.`status` = "aberto"
        }

    fechar(){
        this.status = "fechado"
     
    }

    reabrir(){
        this.status = "abrir"
    }

    atender(){
        this.status ="em andamento" 
    }

    get getStatus(){
    return this.status;
    }


}