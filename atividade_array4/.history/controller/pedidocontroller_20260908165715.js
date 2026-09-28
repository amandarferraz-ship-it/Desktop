import { cadastrar, atualizar, deletar, listar } from "../repository/pedidorepository.js";

export function cadastrarPedidos(pedido){
    cadastrarPedidos(pedido);
}

export function listarPedidos() {
    const pedidos = listar;  

    for (let i = 0; i < pedidos.length; i++) {

        console.log("\n____ Informações do Pedido: ____");
        console.log("Índice: " + i);
        console.log(": " + i);
        console.log("Índice: " + i);
        console.log("Índice: " + i);

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
