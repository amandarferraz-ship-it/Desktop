import { cadastrar, atualizar, deletar, listar } from "../repository/pedidorepository.js";



export function listarPe() {
    const pedidos = listar;    
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
}
