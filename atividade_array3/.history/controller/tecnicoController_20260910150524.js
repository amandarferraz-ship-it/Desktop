import { Tecnico } from "../model/Tecnico";

import { salvar, deletar, listar, buscarPorIndice, editar } from "../repository/tecnicoRepository";

export function  adicionarTecnico(nome, cpf, telefone, especialidade, email){
    const tecnico = new Tecnico(nome, cpf, telefone, especialidade, email);

    salvar(tecnico);

}

export function  editarTecnico(indice, nome, cpf, telefone, especialidade, email){
    const tecnico = new Tecnico(nome, cpf, telefone, especialidade, email);

    editar(indice, tecnico);
}

export function deletarTecnico(indice){
    deletar(indice);
}

export function listarTecnico(){
    const tecnicos = listar();

    for (let i = 0; i < tecnicos.length; i++){
        const tecnico = tecnicos[i];
        console.log(`Nome: ${this.nome}`)
        console.log(`CPF: ${tecnico.getcpf}`)
        console.log(`Telefone: ${tecnico.telefone}`)
        console.log(`Especialidade:`)
    }
      
}