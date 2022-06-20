export class Peca{
    public id : String
    public descricao : String
    public tipo : String
    public preco : String
    public qtdAtual : String


    constructor(id, descricao, tipo, preco, qtdAtual){
        this.id = id
        this.descricao = descricao
        this.tipo = tipo
        this.preco = preco
        this.qtdAtual = qtdAtual
    }
}