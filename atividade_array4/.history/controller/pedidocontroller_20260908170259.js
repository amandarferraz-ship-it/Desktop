import { cadastrar, atualizar, deletar, listar } from "../repository/pedidorepository.js";

export function cadastrarPedidos(pedido){
    cadastrarPedidos(pedido);
}

export function listarPedidos() {
    const pedidos = listar();  

    for (let i = 0; i < pedidos.length; i++) {

        console.log("\n____ Informações do Pedido: ____");
        console.log("Índice: " + i);
        console.log("Código: " + pedidos[i].codigo);
        console.log("Cliente: " + pedidos[i].cliente);
        console.log("Descrição: " + pedidos[i].descricao);
        console.log("Valor: R$" + pedidos[i].valor.toFixed(2));
        console.log("Status: " + pedidos[i].getStatus)



    }
}


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
