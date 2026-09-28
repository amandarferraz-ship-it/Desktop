import { Carro } from "./model/Carro.js";
import { Moto } from "./model/moto.js";

const carro1 = new Carro("Toyota", "Corolla", 4);
const carro2 = new Carro("Chevrolet", "Onix", 4);

const moto1 = new Moto("Honda", "CB 500", 500);
const moto2 = new Moto("Yamaha", "MT-03", 321);

carro1.acelerar(80);
carro1.frear(20);

carro2.acelerar(60);
carro2.frear(10);

moto1.acelerar(100);
moto1.frear(30);

moto2.acelerar(90);
moto2.frear(40);

const veiculos = [carro1, carro2, moto1, moto2];

for (const veiculo of veiculos) {
    console.log("--------------------------------");
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Velocidade atual: ${veiculo.velocidade} km/h`);
    console.log(`Movimento: ${veiculo.mover()}`);
}


