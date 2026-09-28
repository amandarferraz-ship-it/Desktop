const pedidos = []

export function cadastrar(pedido) {
    pedidos.push(pedido);
}

export function listar() {
    return pedidos;
}

export function deletar(indice) {
    chamados.splice(indice, 1 ) 

}

export function atualizarchamado(indice, chamadoAtualizado){
    chamados[indice] = chamadoAtualizado;
}


