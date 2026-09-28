import { Aluno } from "../model/Aluno";
import { cadastrarAluno, lis } from "../repository/alunoRepository";

export function cadastrarAlunoController(nome, idade){

    const aluno = new Aluno(nome, idade);

    cadastrarAluno(aluno);
}

export function listarAlunosController(){

    const alunos = listarAluno();

    for (let i = 0; i < alunos.length; i++ ){

        console.log("indice: " + i);
        console.log("Nome: " + alunos[i].nome);
        console.log("Idade: " + alunos[i].idade);
        console.log()
   
    }
}

export function deletarAlunoController(indice){
    deletarAluno(indice);
}

export function atualizarAlunoController(nome, idade, indice){

    const aluno = new Aluno(nome, idade);

    atualizarAluno(indice, aluno);
}
