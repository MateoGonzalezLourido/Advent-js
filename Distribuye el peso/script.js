//codigo del reto js -> https://adventjs.dev/es/challenges/2023/20
function distributeGifts(weights) {
    let resultado = weights.map(row => [...row])
    for (let i = 0; i < weights.length; i++) {
        for (let j = 0; j < weights[i].length; j++) {
            let pesosMedia = []
            if (weights[i][j] !== undefined && weights[i][j] !== null) {
                pesosMedia.push(weights[i][j])
            }
            // Superior
            if (i > 0) {
                const pesoSumar = weights[i - 1][j]
                if (pesoSumar !== null) {
                    pesosMedia.push(pesoSumar)
                }
            }
            // Inferior
            if (i < weights.length - 1) {
                const pesoSumar = weights[i + 1][j]
                if (pesoSumar !== null) {
                    pesosMedia.push(pesoSumar)
                }
            }
            // Lateral izquierdo
            if (j > 0) {
                const pesoSumar = weights[i][j - 1]
                if (pesoSumar !== null) {
                    pesosMedia.push(pesoSumar)
                }
            }
            // Lateral derecho
            if (j < weights[i].length - 1) {
                const pesoSumar = weights[i][j + 1]
                if (pesoSumar !== null) {
                    pesosMedia.push(pesoSumar)
                }
            }

            let suma = pesosMedia.reduce((acc, num) => acc + num, 0)
            resultado[i][j] = Math.round(suma / pesosMedia.length)
        }
    }

    return resultado
}

const data = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
];
console.log(distributeGifts(data));