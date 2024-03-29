//codigo del reto js-->https://adventjs.dev/es/challenges/2023/15
function autonomousDrive(store, movements) {
    let dataStore = store.map(almacen => almacen.split(''))
    let almacen = dataStore.findIndex(subArray => subArray.includes('!'))
    let posicionAlmacen = dataStore[almacen].indexOf('!')
    const tamañoAlmacen = dataStore.length
    const tamañoAlmacenInt = dataStore[0].length

    for (let i = 0; i < movements.length; i++) {
        let almacenCopy = almacen
        let posAlCopy = posicionAlmacen
        const mov = movements[i]
        if (mov === 'R') {
            posAlCopy++
        }
        else if (mov === 'L') {
            posAlCopy--
        }
        else if (mov === 'U') {
            almacenCopy--
        }
        else if (mov === 'D') {
            almacenCopy++
        }
        const condicion1 = (almacenCopy >= 0 && almacenCopy < tamañoAlmacen)
        const condicion2 = (posAlCopy >= 0 && posAlCopy < tamañoAlmacenInt)

        if (condicion1 && condicion2 && dataStore[almacenCopy][posAlCopy] !== '*') {
            dataStore[almacen][posicionAlmacen] = '.'
            dataStore[almacenCopy][posAlCopy] = '!'
            almacen = almacenCopy
            posicionAlmacen = posAlCopy
        }
    }
    dataStore = dataStore.map(subArray => subArray.join(''))
    return dataStore
}
console.log(autonomousDrive(
    [
        '.**.*.*.',
        '.***....',
        '..!.....'
    ], ['D', 'U', 'R', 'R', 'R']))