import { Veiculo } from "./Veiculo";

export class GerenciadorDeVeiculos {
    private veiculos: Veiculo[] = []
    
    constructor(veiculos: Veiculo[]){
        this.veiculos = veiculos
    }

    filtrarPorMarca(marca: string): Veiculo[] {
        return this.veiculos.filter(veiculo => veiculo.marca === marca);
    }

    somaValorPorMarca(marca: string): number {
        return this.veiculos
            .filter(veiculo => veiculo.marca === marca)
            .reduce((sum, veiculo) => sum + veiculo.valor, 0);
    }

    filtrarPorAno(ano: number): Veiculo[] {
        return this.veiculos.filter(veiculo => veiculo.ano > ano);
    }
}