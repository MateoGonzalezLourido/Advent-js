//codigo del reto js-->

function fitsInOneBox(boxes) {
    const columna = ['l', 'w', 'h']
    let numero_anterior = 0
    for (let i = 0; i < 3; i++) {
        numero_anterior = 0
        for (let j = 0; j < boxes.length; j++) {
            if (numero_anterior > boxes[j][columna[i]]) {
                let valido = false
                numero_anterior = boxes[j][columna[i]]
                for (let k = 0; k < j; k++) {
                    const condicion1 = (boxes[j][columna[0]] > boxes[k][columna[0]])
                    const condicion2 = (boxes[j][columna[1]] > boxes[k][columna[1]])
                    const condicion3 = (boxes[j][columna[2]] > boxes[k][columna[2]])
                    if (condicion1 && condicion2 && condicion3) {
                        valido = true
                    }
                    else {
                        break
                    }
                }
                if (!valido) {
                    return false
                }
            }
            else if (numero_anterior === boxes[j][columna[i]]) {
                return false
            }
            numero_anterior = boxes[j][columna[i]]
        }
    }
    return true
}
const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]

console.log(fitsInOneBox(boxes)) // false