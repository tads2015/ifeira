export class Produto{
    grupo_id: number;
    descricao: string;
    validade: string;
    numero_porcoes: number;
    peso: number;
    valor: number;
    infoadd: string;
    pivot: {
        produtor_cnpo: number;
        produto_id: number;
    }
}