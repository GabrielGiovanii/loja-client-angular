export class Veiculo {

    public Id!: number;
    public Marca: string;
    public Nome: string;
    public AnoModelo!: number;
    public DataFabricacao: string;
    public Valor!: number;
    public Opcional!: string;

    constructor() {
        this.Marca = '';
        this.Nome = '';
        this.DataFabricacao = '';
    }
}