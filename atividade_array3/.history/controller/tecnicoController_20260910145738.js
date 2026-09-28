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
    dele
}