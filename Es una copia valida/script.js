//codigo del reto js-> https://adventjs.dev/es/challenges/2023/12

function checkIsValidCopy(original, copy) {
    const caractDeg = ['#', '+', ':', '.', ' ']
    for (let i = 0; i < original.length; i++) {
        if ((original[i] === ' ') || (original[i] >= 0)) {//espacio/numeros
            if (original[i] !== copy[i]) {
                return false
            }
        }
        else {//letras/simbolos
            if (original[i] !== copy[i]) {
                if ((/[a-zA-Z]/.test(original[i]))) {
                    if (original[i].toLowerCase() !== copy[i]) {
                        //comprobar si esta degradado
                        const existe = caractDeg.indexOf(copy[i])
                        if (existe == -1) {
                            return false
                        }
                    }
                }
                else {
                    //comprobar si esta degradado
                    const existeOriginal = caractDeg.indexOf(original[i])
                    const existeCopia = caractDeg.indexOf(copy[i])
                    if ((existeCopia === -1) || (existeOriginal >= existeCopia)) {
                        return false
                    }
                }
            }
        }
    }
    return true
}
console.log(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s'))