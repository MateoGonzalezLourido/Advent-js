//codigo para el reto js--> https://adventjs.dev/es/challenges/2023/19

function revealSabotage(store) {
    let storeDevolver = store
    for (let i = 0; i < store.length; i++) {
        for (let j = 0; j < store[i].length; j++) {
            let regalosToca = 0
            if (store[i][j] !== '*') {
                //superior
                if (i > 0) {
                    if (j > 0 && store[i - 1][j - 1] === '*') {
                        regalosToca++
                    }
                    if (store[i - 1][j] === '*') {
                        regalosToca++
                    }
                    if (j < store[i].length - 1 && store[i - 1][j + 1] === '*') {
                        regalosToca++
                    }
                }
                //laterales
                if (j > 0) {
                    if (store[i][j - 1] === '*') {
                        regalosToca++
                    }
                }
                if (j < store[i].length - 1) {
                    if (store[i][j + 1] === '*') {
                        regalosToca++
                    }
                }
                //inferior
                if (i < store.length - 1) {
                    if (j > 0 && store[i + 1][j - 1] === '*') {
                        regalosToca++
                    }
                    if (store[i + 1][j] === '*') {
                        regalosToca++
                    }
                    if (j < store[i].length - 1 && store[i + 1][j + 1] === '*') {
                        regalosToca++
                    }
                }
                //guardar 
                if (regalosToca > 0) {
                    storeDevolver[i][j] = (regalosToca).toString()
                }
            }
        }
    }
    return storeDevolver
}
console.log(revealSabotage([
    ['*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '*', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '*']
])
)