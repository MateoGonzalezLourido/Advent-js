//codigo para el reto js-> https://adventjs.dev/es/challenges/2023/25

function travelDistance(map) {
    let pasosTotales = 0
    const mapa = map.split('\n')
    let posicionSanta = []
    const posicionNiños = []

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
    posicionNiños.sort((a, b) => { return a[0] - b[0] })
    posicionNiños.forEach(loc => {
        const dpX = Math.abs(loc[2] - posicionSanta[1])
        const dpY = Math.abs(loc[1] - posicionSanta[0])
        pasosTotales += dpX + dpY
        posicionSanta = [loc[1], loc[2]]
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