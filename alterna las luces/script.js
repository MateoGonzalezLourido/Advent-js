//codigo para el reto js-> https://adventjs.dev/es/challenges/2023/9

function adjustLights(lights) {
    const cantidadLuces = lights.length
    let cadena_correcta1 = ['🟢']
    let cadena_correcta2 = ['🔴']
    //crear cadenas correctas
    for (let i = 1; i < cantidadLuces; i++) {
        if (cadena_correcta1[i - 1] == '🟢') {
            cadena_correcta1.push('🔴')
        }
        else {
            cadena_correcta1.push('🟢')
        }
        if (cadena_correcta2[i - 1] == '🟢') {
            cadena_correcta2.push('🔴')
        }
        else {
            cadena_correcta2.push('🟢')
        }
    }
    //comparamos lights con cadena_correcta
    let fallos1 = 0
    let fallos2 = 0
    for (let i = 0; i < cantidadLuces; i++) {
        if (lights[i] != cadena_correcta1[i]) {
            fallos1++
        }
        if (lights[i] != cadena_correcta2[i]) {
            fallos2++
        }
    }
    if (fallos1 <= fallos2) {
        return fallos1
    }
    else {
        return fallos2
    }
}
console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))