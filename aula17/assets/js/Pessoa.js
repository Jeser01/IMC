class Pessoa {
    constructor(nome, sobrenome, peso, altura) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.peso = peso;
      this.altura = altura;
    }

    toString(){
      return this.nome;
    }
  }
  
  export default Pessoa;
  