import { chamado } from "../model/chamado.js";
import { ChamadoHardware } from "../model/ChamadoHardware.js";
import {ChamadoSoftware} from "../model/ChamadoSoftware.js";

import {adicionarChamado, obterTodosChamados, atualizarChamadoPorIndice, excluirChamadoPorIndice} from "../repository/chamadoController.js";
import { buscarPorIndice as buscarTecnico } from "../repository/tecnicoRepository.js";


const chamados = [];


export function cadastrarchamadohardware(titulo, setor, prioridade, descricao, componente) {
    const chamados = new ChamadoHardware(titulo, setor, prioridade,descricao, componente);
    adicionar (ChamadoHardware);
}

export function cadastrarchamadoSoftware(titulo, setor, prioridade,descricao, sistema) {
    const chamados = new ChamadoSoftware (titulo, setor, prioridade,descricao, sistema);
    adicionar (ChamadoSoftware);
}


export function listarChamados() {
    const chamados = obterTodosChamados();
    
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

export function atualizarChamadoHardware(indice, titulo, setor, prioridade, descricao, componente) {
    const chamadoAtualizado = new ChamadoHardware(titulo, setor, prioridade, descricao, componente);
    atualizarChamadoPorIndice(indice, chamadoAtualizado);
    return chamadoAtualizado;
}

export function atualizarChamadoSoftware(indice, titulo, setor, prioridade, descricao, sistema) {
    const chamadoAtualizado = new ChamadoSoftware(titulo, setor, prioridade, descricao, sistema);
    atualizarChamadoPorIndice(indice, chamadoAtualizado);
    return chamadoAtualizado;
}

export function excluirChamado(indice) {
    excluirChamadoPorIndice(indice);
}

export function fecharChamado(indice) {
    const chamados = obterTodosChamados();
    if (chamados[indice]) {
        chamados[indice].fechar(); 
    } else {
        console.log("Chamado não encontrado.");
    }
}
export function reabrirChamado(indice) {
    const chamados = obterTodosChamados();
    if (chamados[indice]) {
        chamados[indice].reabrir(); 
    } else {
        console.log("Chamado não encontrado.");
    }

export function assumirChamado(indiceTecnico, indiceChamado){
    const tecnico = buscarTecnico(indi)
}

}
