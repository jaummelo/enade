import { Veiculo } from '../src/Veiculo';
import { GerenciadorDeVeiculos } from '../src/GerenciadorDeVeiculos';

const veiculos: Veiculo[] = [
    { tipo: 'CARRO', marca: 'Toyota', valor: 20000, ano: 2018 },
    { tipo: 'CARRO', marca: 'Honda', valor: 22000, ano: 2019 },
    { tipo: 'MOTO', marca: 'Yamaha', valor: 15000, ano: 2020 },
    { tipo: 'CARRO', marca: 'Toyota', valor: 25000, ano: 2021 },
    { tipo: 'MOTO', marca: 'Honda', valor: 14000, ano: 2022 }
];

const manager = new GerenciadorDeVeiculos(veiculos);

describe('GerenciadorDeVeiculos', () => {
    test('deve filtrar por marca', () => {
        const veiculosDaToyota = manager.filtrarPorMarca('Toyota');
        expect(veiculosDaToyota.length).toBe(2);
        expect(veiculosDaToyota.every(v => v.marca === 'Toyota')).toBe(true);
    });

    test('deve somar o valor por marca', () => {
        const valor = manager.somaValorPorMarca('Toyota');
        expect(valor).toBe(45000);

        const hondaValue = manager.somaValorPorMarca('Honda');
        expect(hondaValue).toBe(36000);
    });

    test('deve filtrar por ano', () => {
        const veiculos = manager.filtrarPorAno(2019);
        expect(veiculos.length).toBe(3);
        expect(veiculos.every(v => v.ano > 2019)).toBe(true);
    });
});