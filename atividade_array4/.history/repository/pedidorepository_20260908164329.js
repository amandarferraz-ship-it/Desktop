const pedidos = []

export function cadastrarchamado(chamado) {
    chamado.push(chamado);
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


