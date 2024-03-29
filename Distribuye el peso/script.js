//codigo del reto js -> https://adventjs.dev/es/challenges/2023/20
function distributeGifts(weights) {
    let resultado = weights.map(row => [...row])
    let pesosMedia = [0, 0]
    const añadirPeso = (r, c) => {
        if (weights[r] && weights[r][c] !== null) {
            pesosMedia[0] += weights[r][c]
            pesosMedia[1]++
        }
    }
    for (let i = 0; i < weights.length; i++) {
        for (let j = 0; j < weights[i].length; j++) {
            pesosMedia = [0, 0]
            //propio
            añadirPeso(i, j)
            // Superior
            añadirPeso(i - 1, j)
            // Inferior
            añadirPeso(i + 1, j)
            // Lateral izquierdo
            if (j > 0) añadirPeso(i, j - 1)
            // Lateral derecho
            if (j < weights[i].length - 1) añadirPeso(i, j + 1)

            resultado[i][j] = Math.round(pesosMedia[0] / pesosMedia[1])
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