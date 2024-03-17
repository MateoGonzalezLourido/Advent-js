//codigo del reto js-> https://adventjs.dev/es/challenges/2023/6

function maxDistance(movements) {
    let derecha = 0
    let izquierda = 0
    let comodin = 0
    let movimientos = movements.split('')
    movimientos.forEach(mov => {
        if (mov == ">") {
            derecha++
        }
        else if (mov == "<") {
            izquierda++
        }
        else {
            comodin++
        }
    })
    const resultado = (derecha - izquierda) >= 0 ? (derecha - izquierda) : -(derecha - izquierda)
    return resultado + comodin
}
console.log(maxDistance('<<**>>'))