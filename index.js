const a = require("./funcao")
const prompt = require("prompt-sync")()

let raio = prompt("Digite o raio do circulo: ")
let resposta = a.areaCirculo(raio)
console.log(resposta)