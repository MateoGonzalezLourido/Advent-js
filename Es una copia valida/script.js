//codigo del reto js-> https://adventjs.dev/es/challenges/2023/12

function checkIsValidCopy(original, copy) {
    const caractDeg = ['#', '+', ':', '.', ' ']
    let copia = true
    for (let i = 0; i < original.length; i++) {
        if (original[i] == ' ') {//espacio
            if (original[i] != copy[i]) {
                copia = false
                break
            }
        }
        else if (!isNaN(Number(original[i]))) {//numero
            if (copy[i] != original[i]) {
                copia = false
                break
            }
        }
        else {//letras/simbolos
            if (original[i] != copy[i]) {
                if ((/[a-zA-Z]/.test(original[i]))) {
                    if (original[i].toLowerCase() != copy[i]) {
                        //comprobar si esta degradado
                        const existe = caractDeg.indexOf(copy[i])
                        if (existe == -1) {
                            copia = false
                            break
                        }
                    }
                }
                else {
                    //comprobar si esta degradado
                    const existeOriginal = caractDeg.indexOf(original[i])
                    const existeCopia = caractDeg.indexOf(copy[i])
                    if (existeCopia == -1) {
                        copia = false
                        break
                    }
                    else if (existeOriginal >= existeCopia) {
                        copia = false
                        break
                    }
                }
            }
        }
    }
    return copia
}
console.log(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s'))