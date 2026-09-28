const pedidos = []

export function cadastrar(pedido) {
    pedidos.push(pedido);
}

export function listar() {
    return pedidos;
}

export function deletar(indice) {
    pedidos.splice(indice, 1 ) 

}

export function atualizarindice, chamadoAtualizado){
    chamados[indice] = chamadoAtualizado;
}


