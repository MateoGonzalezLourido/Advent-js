//codigo del reto js-->https://adventjs.dev/es/challenges/2023/15
function autonomousDrive(store, movements) {
    let dataStore = []
    let almacen = 0
    let posicionAlmacen = 0
    store.forEach(almacen => {
        dataStore.push(almacen.split(''))
    })
    for (let i = 0; i < dataStore.length; i++) {
        posicionAlmacen = dataStore[i].indexOf('!')
        if (posicionAlmacen != -1) {
            almacen = i
            break
        }
    }
    for (let i = 0; i < movements.length; i++) {
        let almacenCopia = almacen
        let posicionAlmacenCopia = posicionAlmacen
        const mov = movements[i]
        if (mov === 'R') {
            posicionAlmacenCopia++
        }
        else if (mov === 'L') {
            posicionAlmacenCopia--
        }
        else if (mov === 'U') {
            almacenCopia--
        }
        else if (mov === 'D') {
            almacenCopia++
        }
        try {
            const posicion = dataStore[almacenCopia][posicionAlmacenCopia]
            if (posicion != '*' && posicion != undefined) {
                dataStore[almacen][posicionAlmacen] = '.'
                dataStore[almacenCopia][posicionAlmacenCopia] = '!'
                almacen = almacenCopia
                posicionAlmacen = posicionAlmacenCopia
            }
        } catch { }
    }
    for (let i = 0; i < dataStore.length; i++) {
        dataStore[i] = dataStore[i].join('')
    }
    return dataStore
}
console.log(autonomousDrive(
    [
        '.**.*.*.',
        '.***....',
        '..!.....'
    ], ['D', 'U', 'R', 'R', 'R']))