const a = require("./funcao")
const prompt = require("prompt-sync")()

let raio = prompt("Digite o raio do circulo: ")
let resposta = a.areaCirculo(raio)
console.log(resposta)

let altura = prompt("Digite a altura do triângulo: ")
let base =  prompt("Digite a base do triângulo: ")
resposta = a.areaTriangulo(base, altura)
console.log(resposta)

resposta = a.areaRetangulo (base,altura)