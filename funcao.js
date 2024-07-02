function areaCirculo (raio) {
    let area = Math.PI * raio * raio 
    console.log("A área do circulo é" )
    return area
}
function areaTriangulo (b, a) {
    let area = (b*a) /2
    console.log("A área do triângulo é" )
    return area
}
function areaRetangulo (b, h) {
    let area = b*h
    console.log("A area do retangulo é: "+area )
    
}
module.exports = {
    areaCirculo, 
    areaTriangulo,
    areaRetangulo
}