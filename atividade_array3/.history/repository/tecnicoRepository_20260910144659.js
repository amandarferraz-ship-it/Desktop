const tecnicos = [];

export function salvar(tecnico){
    tecnicos.push(tecnico)
}


export function editar(indice, tecnico){
    tecnicos[indice].push(tecnico)
}

export function deletar(indice){
    tecnicos.splice(indice, 1)
}

export function listar(){
    return tecnicos;
}

export function buscarPorIndice(indice){

}