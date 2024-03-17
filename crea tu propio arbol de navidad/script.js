//codigo para el reto js-> https://adventjs.dev/es/challenges/2023/10

function createChristmasTree(ornaments, height) {
    let arbol = ""
    let caracter = 0
    for (let i = 1; i <= height; i++) {
        for (let j = 0; j < (height - i); j++) {
            arbol += ' '
        }
        for (let j = 0; j < i; j++) {
            if (j == 0) {
                arbol += ornaments[caracter]
            }
            else {
                arbol += ' ' + ornaments[caracter]
            }
            caracter++
            if (caracter >= ornaments.length) {
                caracter = 0
            }
        }
        arbol += '\n'
    }
    if (height % 2 == 0) {//par
        for (let i = 0; i < ((height / 2) + (height / 2) - 1); i++) {
            arbol += ' '
        }
    }
    else {
        for (let i = 0; i <= ((height - (Math.ceil(height / 2))) + (Math.floor(height / 2) - 1)); i++) {
            arbol += ' '
        }
    }

    arbol += '|\n'
    return arbol
}
console.log(createChristmasTree("123", 5))