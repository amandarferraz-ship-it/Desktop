import { cadastrarAlunoController, atualizarAlunoController, deletarAlunoController, listarAlunosController } from "./controller/alunoController.js";

cadastrarAlunoController("Carlos" , 30);
cadastrarAlunoController("Camile" , 40);
cadastrarAlunoController("fernando" , 17);

console.log("Alunos cadastrados:\n");

listarAlunosController();

atualizarAlunoController("José" , 50, 2 );

deletarAlunoController(1);

console.log("1 aluno atualizado e 1 excluído: \n");

listarAlunosController();

