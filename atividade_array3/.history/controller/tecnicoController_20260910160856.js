import { Tecnico } from "../model/Tecnico";

import { salvar, deletar, listar, buscarPorIndice as buscarChamado', editar } from "../repository/tecnicoRepository";
import { buscarPorIndice as buscarPorIndice } from "../repository/tecnicoRepository";

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
        console.log(`Especialidade: ${tecnico.especialidade}`)
        console.log(`Email: ${tecnico.email}`)
    }
      
}



import { Tecnico } from "../model/Tecnico.js";

import {
    salvar,
    deletar,
    listar,
    buscarPorIndice,
    editar
} from "../repository/tecnicoRepository.js";


/* =========================
   ADICIONAR TÉCNICO
========================= */

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


/* =========================
   EDITAR TÉCNICO
========================= */

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


/* =========================
   DELETAR TÉCNICO
========================= */

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



========================= */

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



export function buscarTecnico(indice) {
    const tecnico = buscarPorIndice(indice);

    if (!tecnico) {
        console.log("Técnico não encontrado.");
        return null;
    }

    return tecnico;
}
