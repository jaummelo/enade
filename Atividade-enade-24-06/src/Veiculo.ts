import { TipoDeVeiculo } from "./TipoDeVeiculo";

export interface Veiculo {
    tipo: TipoDeVeiculo;
    marca: string;
    valor: number;
    ano: number;
}