//codigo para el reto js-> https://adventjs.dev/es/challenges/2023/25

function travelDistance(map) {
    let pasosTotales = 0
    let mapa = map.split('\n')
    let posicionSanta = []
    let posicionNiños = []
    for (let i = 0; i < mapa.length; i++) {
        for (let j = 0; j < mapa[i].length; j++) {
            if (mapa[i][j] > 0) {
                posicionNiños.push([mapa[i][j], i, j])
            }
            else if (mapa[i][j] === 'S') {
                posicionSanta = [i, j]
            }
        }
    }
    posicionNiños.sort(function (a, b) {
        return a[0] - b[0]
    })
    posicionNiños.forEach(localizacion => {
        const dpX = Math.abs(localizacion[2] - posicionSanta[1])
        const dpY = Math.abs(localizacion[1] - posicionSanta[0])
        posicionSanta = [localizacion[1], localizacion[2]]
        pasosTotales += dpX + dpY
    })
    return pasosTotales
}
const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log(result)