import { Tecnico } from "../model/Tecnico.js";

import {salvar, deletar,  listar, buscarPorIndice, editar, buscarPorTecnico} from "../repository/tecnicoRepository.js";


export function adicionarTecnico(
    nome,
    cpf,
    telefone,
    especialidade,
    email
) {
    const tecnico = new Tecnico(
        nome,
        cpf,
        telefone,
        especialidade,
        email
    );

    salvar(tecnico);

    return tecnico;
}




export function editarTecnico(
    indice,
    nome,
    cpf,
    telefone,
    especialidade,
    email
) {
    const tecnico = buscarPorIndice(indice);

    if (!tecnico) {
        console.log("Técnico não encontrado.");
        return false;
    }

    const tecnicoAtualizado = new Tecnico(
        nome,
        cpf,
        telefone,
        especialidade,
        email
    );

    editar(indice, tecnicoAtualizado);

    return tecnicoAtualizado;
}



export function deletarTecnico(indice) {
    const tecnico = buscarPorIndice(indice);

    if (!tecnico) {
        console.log("Técnico não encontrado.");
        return false;
    }

    deletar(indice);

    console.log("Técnico deletado com sucesso.");

    return true;
}




export function listarTecnico() {
    const tecnicos = listar();

    if (tecnicos.length === 0) {
        console.log("Nenhum técnico cadastrado.");
        return;
    }

    for (let i = 0; i < tecnicos.length; i++) {
        const tecnico = tecnicos[i];

        console.log(`Índice: ${i}`);
        console.log(`Nome: ${tecnico.nome}`);
        console.log(`CPF: ${tecnico.cpf}`);
        console.log(`Telefone: ${tecnico.telefone}`);
        console.log(`Especialidade: ${tecnico.especialidade}`);
        console.log(`Email: ${tecnico.email}`);
        console.log("---------------------------");
    }

    return tecnicos;
}

export function assumirChamadoTecnico(indicetecnico, indiceChamado){
    const tecnico = buscarPorTecnico(indiceTecnico)
}
