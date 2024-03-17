//codigo del reto js->https://adventjs.dev/es/challenges/2023/7

function drawGift(size, symbol) {
    let caras = []
    for (let i = 0; i < size; i++) {
        let texto = ''
        if (i == 0) {//inicio
            for (let j = 0; j < size; j++) {
                texto += '#'
            }
            caras.push(texto)
        }
        else {
            for (let j = 0; j < (size - 2); j++) {
                texto += '#'
                for (let k = 0; k < (size - 2); k++) {
                    texto += symbol
                }
                texto += '#'
                for (let k = 0; k < j; k++) {
                    texto += symbol
                }
                texto += '#'
                caras.push(texto)
                texto = ''
            }
            texto = ''
            for (let k = 0; k < size; k++) {
                texto += '#'
            }
            for (let k = 0; k < (size - 2); k++) {
                texto += symbol
            }
            texto += '#'
            caras.push(texto)
            break
        }

    }
    let n_bucle = caras.length - 1
    for (let i = n_bucle - 1; i >= 0; i--) {
        caras.push(caras[i])
    }
    let textoDevolver = (caras.toString()).replaceAll(',', '\n') + '\n'
    return textoDevolver
}