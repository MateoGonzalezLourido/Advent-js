//codigo del reto js-> https://adventjs.dev/es/challenges/2023/6

function maxDistance(movements) {
    let resultado = 0
    let comodin = 0
    const movimientos = movements.split('')
    movimientos.forEach(mov => {
        if (mov === ">") {
            resultado--
        }
        else if (mov === "<") {
            resultado++
        }
        else {
            comodin++
        }
    })
    resultado = Math.abs(resultado) + comodin
    return resultado
}
console.log(maxDistance('<<**>>'))