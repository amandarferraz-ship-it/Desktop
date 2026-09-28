import { ChamadoHardware } from "../model/ChamadoHardware.js";
import { ChamadoSoftware } from "../model/ChamadoSoftware.js";

import {
    cadastrarchamado as cadastrarChamadoRepository, deletarchamado, atualizarchamado, listarchamadoexcluirChamado as excluirChamadoRepository
} from "../repository/chamadoRepository.js";

const chamados = [];


export function cadastrarChamadoHardware(
    titulo,
    setor,
    prioridade,
    descricao,
    componente
) {
    const chamado = new ChamadoHardware(
        titulo,
        setor,
        prioridade,
        descricao,
        componente
    );

    chamados.push(chamado);

    return chamado;
}


export function cadastrarChamadoSoftware(
    titulo,
    setor,
    prioridade,
    descricao,
    sistema
) {
    const chamado = new ChamadoSoftware(
        titulo,
        setor,
        prioridade,
        descricao,
        sistema
    );

    chamados.push(chamado);

    return chamado;
}


export function listarChamados() {

    if (chamados.length === 0) {
        console.log("Nenhum chamado cadastrado.");
        return;
    }

    for (let i = 0; i < chamados.length; i++) {

        const chamado = chamados[i];

        console.log(
            `Índice: ${i} | ` +
            `Título: ${chamado.titulo} | ` +
            `Setor: ${chamado.setor} | ` +
            `Prioridade: ${chamado.prioridade} | ` +
            `Status: ${chamado.status} | ` +
            `Atendimento: ${chamado.atender()}`
        );
    }
}


export function atualizarChamadoHardware(
    indice,
    titulo,
    setor,
    prioridade,
    descricao,
    componente
) {

    if (!chamados[indice]) {
        console.log("Chamado não encontrado.");
        return false;
    }

    const chamadoAtualizado = new ChamadoHardware(
        titulo,
        setor,
        prioridade,
        descricao,
        componente
    );

    chamados[indice] = chamadoAtualizado;

    return chamadoAtualizado;
}




export function atualizarChamadoSoftware(
    indice,
    titulo,
    setor,
    prioridade,
    descricao,
    sistema
) {

    if (!chamados[indice]) {
        console.log("Chamado não encontrado.");
        return false;
    }

    const chamadoAtualizado = new ChamadoSoftware(
        titulo,
        setor,
        prioridade,
        descricao,
        sistema
    );

    chamados[indice] = chamadoAtualizado;

    return chamadoAtualizado;
}


export function excluirChamado(indice) {

    if (!chamados[indice]) {
        console.log("Chamado não encontrado.");
        return false;
    }

    chamados.splice(indice, 1);

    console.log("Chamado excluído com sucesso.");

    return true;
}



export function fecharChamado(indice) {

    const chamado = chamados[indice];

    if (!chamado) {
        console.log("Chamado não encontrado.");
        return false;
    }

    chamado.fechar();

    return true;
}


export function reabrirChamado(indice) {

    const chamado = chamados[indice];

    if (!chamado) {
        console.log("Chamado não encontrado.");
        return false;
    }

    chamado.reabrir();

    return true;
}


export function assumirChamado(indiceTecnico, indiceChamado) {

    const tecnico = buscarTecnico(indiceTecnico);
    const chamado = chamados[indiceChamado];

    if (!tecnico || !chamado) {
        console.log("Técnico ou chamado não encontrado.");
        return false;
    }

    chamado.assumir(tecnico);

    return true;
}
