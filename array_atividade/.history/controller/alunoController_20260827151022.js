import { Aluno } from "../modelAluno.js";
import {cadastrarAluno, listarAlunos, deletarAluno, atualizarAluno} from "../repository/alunoRepository.js";

export function cadAluno(nome, idade){

    const aluno = new Aluno(nome, idade);

    cadastrarAluno(aluno);
}

export function listarAlunosController(){

    const aluno = listarAlunos();

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

export function atualizarAlunoController(nome, idade){

    const aluno = new Aluno(nome, idade);

    atualizarAluno(indice, aluno);
}
