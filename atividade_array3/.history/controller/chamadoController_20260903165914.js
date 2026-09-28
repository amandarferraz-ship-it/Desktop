import { chamado } from "../model/chamado.js";
import { ChamadoHardware } from "../model/ChamadoHardware.js";
import {ChamadoSoftware} from "../model/ChamadoSoftware.js";

import {adicionarChamado, obterTodosChamados, atualizarChamadoPorIndice, excluirChamadoPorIndice} from "../repository/chamadoController.js";

export function cadastrar(titulo, setor, prioridade, descricao, componente) {
    const chamado = new ChamadoHardware(titulo, setor, prioridade,descricao, componente)
    adicionar(ChamadoHardware);
}

export function cadastrarMoto(titulo, setor, prioridade,descricao, sistema) {
    const chamados = new ChamadoSoftware (titulo, setor, prioridade,descricao, sistema)
    adicionar(ChamadoSoftware);
}


export function listarChamados() {
    const chamados = obterTodosChamados();
    
    if (chamados.length === 0) {
        console.log("Nenhum chamado cadastrado.");
        return;
    }

    for (let i = 0; i < chamados.length; i++) {
        const chamado = chamados[i];
        console.log(
            `Índice: ${i} | ` +
            `Título: ${chamado.titulo} | ` +
            `Setor: ${chamado.setor} | ` +
            `Prioridade: ${chamado.prioridade} | ` +
            `Status: ${chamado.status} | ` +
            `Atendimento: ${chamado.atender()}`
        );
    }
}

export function acelerarVeiculo(indice, valor) {
    const veiculo = buscarPorIndice(indice);
    veiculo.acelerar(valor);
}

export function frearVeiculo(indice, valor) {
    const veiculo = buscarPorIndice(indice);
    veiculo.frear(valor);
}

export function atualizarCarro(indice,marca, modelo, portas) {
    const veiculo = new Carro(marca, modelo, portas)

    editar(indice,veiculo);
}

export function atualizarMoto(indice, marca, modelo, cilindradas) {
    const veiculo = new Moto(marca, modelo, cilindradas)

    editar(indice, veiculo);

}

export function deletarVeiculo(indice) {
    deletar(indice);

}

export function listarVeiculos() {
    const veiculos = listar();

    for (let i = 0; i < veiculos.length; i++) {
        const veiculo = veiculos[i];

        console.log("----------------------------");
        console.log(`Índice: ${i}`);
        console.log(`Marca: ${veiculo.marca}`);
        console.log(`Modelo: ${veiculo.modelo}`);
        console.log(`Velocidade: ${veiculo.getVelocidade} km/h`);

    }
}
