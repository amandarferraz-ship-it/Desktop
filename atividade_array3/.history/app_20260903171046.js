import { } from "./controller/chamadoController.js";
import { cadastrarchamado } from "./repository/chamadoRepository.js";

cadastrarcada(1, 4);

cadastrarchamado(3, 2);

cadastrarMoto("Yamaha", "MT-03", 321);

console.log("\nVEÍCULOS CADASTRADOS");

listarVeiculos();

acelerarVeiculo(0, 80);
frearVeiculo(0, 20);

acelerarVeiculo(1, 100);
frearVeiculo(1, 30);

acelerarVeiculo(2, 70);
frearVeiculo(2, 10);


atualizarCarro("Volkswagen", "Jetta", 4);


console.log("\nAPÓS ATUALIZAÇÃO");

listarVeiculos();

deletarVeiculo(2);

console.log("\nAPÓS EXCLUSÃO");

listarVeiculos();