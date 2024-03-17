//codigo para el reto js->  https://adventjs.dev/es/challenges/2023/1
function findFirstRepeated(gifts) {
    let n_repetidos = []
    gifts.forEach((numeroMirar) => {
        if (numeroMirar != "") {
            const indices = []
            for (let j = 0; j < gifts.length; j++) {
                if (numeroMirar == gifts[j]) {
                    indices.push(j)
                    gifts[j] = ""//vacio
                }
            }
            if (indices.length > 1) {//se repite
                n_repetidos.push([numeroMirar, indices])
            }
        }
    })
    if (n_repetidos.length == 0) {//no hay repetidos
        return -1
    }
    else if (n_repetidos.length == 1) {//solo hay un repetido
        return n_repetidos[0][0]
    }
    else {//mas de un repetido
        const indiceSegundaAparicion = []
        n_repetidos.forEach((item) => {
            indiceSegundaAparicion.push(item[1][1])
        })
        let indiceMenor = 0
        for (let i = 0; i < indiceSegundaAparicion.length - 1; i++) {
            if (indiceSegundaAparicion[i] > indiceSegundaAparicion[i + 1]) {
                indiceMenor = i + 1
            }
        }
        //devolver numero cuya segunda ocurrencia aparezca primero en la lista
        return n_repetidos[indiceMenor][0]
    }
}
const giftIds = [5, 1, 5, 1]
console.log(findFirstRepeated(giftIds))