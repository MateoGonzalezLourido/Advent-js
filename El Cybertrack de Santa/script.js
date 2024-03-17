//codigo del reto js -> https://adventjs.dev/es/challenges/2023/5
function cyberReindeer(road, time) {
    let procesoActual = road
    let procesos = [road]
    for (let i = 1; i < time; i++) {
        if (i == 5) {
            procesoActual = procesoActual.replaceAll('|', '*')//abrir barreras
        }
        let camino = procesoActual.split('')
        for (let i = 0; i < camino.length; i++) {
            if (camino[i] == 'S') {//trineo
                if (camino[i + 1] != '|') {//moverlo
                    camino[i + 1] = 'S'
                    if (road[i] == '|') {
                        camino[i] = '*'
                    }
                    else {
                        camino[i] = '.'
                    }
                }
                break
            }
        }
        procesoActual = (camino.toString()).replaceAll(',', '')
        procesos.push(procesoActual)
    }
    return procesos
}
console.log(cyberReindeer('S..|...|..', 10))