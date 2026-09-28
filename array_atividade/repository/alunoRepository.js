const alunos = [];

export function cadastrarAluno(Aluno) {
    alunos.push(Aluno);
    
}

export function listarAluno(){
    return alunos;

}

export function deletarAluno(indice){
    alunos.splice(indice, 1);
}

export function atualizarAluno(indice, Aluno){
    alunos[indice] = Aluno;
}