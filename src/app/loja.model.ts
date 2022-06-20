export class Loja{
    public email : String
    public senha : String
    public nomeGerente : String
    public nomeLoja : String
    public cnpjLoja : String
    public telefone : String
    public endereco : String
    public coordenadas : String 

    constructor(email, senha, nomeGerente, nomeLoja, cnpjLoja, telefone, endereco, coordenadas){
        this.email = email
        this.senha = senha
        this.nomeGerente = nomeGerente
        this.nomeLoja = nomeLoja
        this.cnpjLoja = cnpjLoja
        this.telefone = telefone
        this.endereco = endereco
        this.coordenadas = coordenadas
    }
}