import { ChamadoHardware } from "../model/ChamadoHardware.js";
import {ChamadoSoftware} from "../model/ChamadoSoftware.js";

import { cadastrar, editar, deletar, listar, buscarPorIndice } from "../repository/VeiculoRepository.js";

export function cadastrarCarro(marca, modelo, portas) {
    const veiculo = new Carro(marca, modelo, portas)
    adicionar(veiculo);
}

export function cadastrarMoto(marca, modelo, cilindradas) {
    const veiculo = new Moto (marca, modelo, cilindradas)
    adicionar(veiculo);
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
