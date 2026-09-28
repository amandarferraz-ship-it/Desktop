const tecnicos = [];

export function salvar(tecnico){
    tecnicos.push(tecnico)
}


export function editar(indice, tecnico){
    tecnicos[indice].push(tecnico)
}

exp