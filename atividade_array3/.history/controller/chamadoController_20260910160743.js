import { ChamadoHardware } from "../model/ChamadoHardware.js";
import { ChamadoSoftware } from "../model/ChamadoSoftware.js";

import {
    cadastrarchamado,
    listarchamado,
    deletarchamado,
    atualizarchamado,
    buscarPorChamado
} from "../repository/chamadoRepository.js";


/* =========================
   CADASTRAR HARDWARE
========================= */

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

    cadastrarchamado(chamado);

    return chamado;
}


/* =========================
   CADASTRAR SOFTWARE
========================= */

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

    cadastrarchamado(chamado);

    return chamado;
}


/* =========================
   LISTAR CHAMADOS
========================= */

export function listarChamados() {
    const chamados = listarchamado();

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

    return chamados;
}


/* =========================
   ATUALIZAR HARDWARE
========================= */

export function atualizarChamadoHardware(
    indice,
    titulo,
    setor,
    prioridade,
    descricao,
    componente
) {
    const chamado = buscarPorChamado(indice);

    if (!chamado) {
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

    atualizarchamado(indice, chamadoAtualizado);

    return chamadoAtualizado;
}


/* =========================
   ATUALIZAR SOFTWARE
========================= */

export function atualizarChamadoSoftware(
    indice,
    titulo,
    setor,
    prioridade,
    descricao,
    sistema
) {
    const chamado = buscarPorChamado(indice);

    if (!chamado) {
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

    atualizarchamado(indice, chamadoAtualizado);

    return chamadoAtualizado;
}




export function excluirChamado(indice) {
    const chamado = buscarPorChamado(indice);

    if (!chamado) {
        console.log("Chamado não encontrado.");
        return false;
    }

    deletarchamado(indice);

    console.log("Chamado excluído com sucesso.");

    return true;
}



export function fecharChamado(indice) {
    const chamado = buscarPorChamado(indice);

    if (!chamado) {
        console.log("Chamado não encontrado.");
        return false;
    }

    chamado.fechar();

    return true;
}



export function reabrirChamado(indice) {
    const chamado = buscarPorChamado(indice);

    if (!chamado) {
        console.log("Chamado não encontrado.");
        return false;
    }

    chamado.reabrir();

    return true;
}
