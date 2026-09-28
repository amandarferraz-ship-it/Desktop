const pedidos = []

export function cadastrar(pedido) {
    pedidos.push(pedido);
}

export function listarchamado() {
    return chamados;
}

export function deletarchamado(indice) {
    chamados.splice(indice, 1 ) 

}

export function atualizarchamado(indice, chamadoAtualizado){
    chamados[indice] = chamadoAtualizado;
}


