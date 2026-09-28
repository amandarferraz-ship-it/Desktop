import { cadastrarAlunoController, atualizarAlunoController, deletarAlunoController, listarAlunosController } from "./controller/alunoController.js";

cadastrarAlunoController("Carlos" , 30);
cadastrarAlunoController("Camil" , 40);
cadastrarAlunoController("Camile" , 17);

console.log("Alunos cadastrados");

listarAlunosController();

atualizarAlunoController("José" , 50, 2 );

deletarAlunoController(1)

