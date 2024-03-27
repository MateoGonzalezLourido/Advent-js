//codigo del reto js -> https://adventjs.dev/es/challenges/2023/5
function cyberReindeer(road, time) {
    const procesos = [road]
    let procesoActual = road

    for (let i = 1; i < time; i++) {
        if (i === 5) {
            procesoActual = procesoActual.replaceAll('|', '*')
        }
        procesoActual = procesoActual.split('')
        const paso = procesoActual.indexOf('S')
        if (procesoActual[paso + 1] !== '|') {
            procesoActual[paso + 1] = 'S'
            if (road[paso] === '|') {
                procesoActual[paso] = '*'
            }
            else {
                procesoActual[paso] = '.'
            }
        }
        procesoActual = procesoActual.join('')
        procesos.push(procesoActual)
    }

    return procesos
}
console.log(cyberReindeer('S..|...|..', 10))