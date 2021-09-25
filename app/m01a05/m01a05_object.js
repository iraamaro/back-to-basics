const pessoa = { nome: 'Maria', idade: 33, altura: 1.77, peso: 60 }
pessoa.correr = function(km) { this.peso -= km * 0.05 }
pessoa.comer = function(g) { this.peso += g / 2000 }
pessoa.correr(30)
pessoa
pessoa.comer(1000)
pessoa