//codigo del reto js-> https://adventjs.dev/es/challenges/2023/3
function findNaughtyStep(original, modified) {
    if (modified.length < original.length) {//un paso eliminado
        for (let i = 0; i < original.length; i++) {
            try {
                if (original[i] != modified[i]) {
                    return original[i]
                }
            }
            catch {
                return original[i]
            }
        }
    }
    else if (modified.length > original.length) {//un paso añadido
        for (let i = 0; i < modified.length; i++) {
            try {
                if (original[i] != modified[i]) {
                    return modified[i]
                }
            }
            catch {
                return modified[i]
            }
        }
    }
    else {//está igual
        return ''
    }
}

console.log(findNaughtyStep('abcde','abcd'))