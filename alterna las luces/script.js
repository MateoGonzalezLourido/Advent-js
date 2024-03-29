//codigo para el reto js-> https://adventjs.dev/es/challenges/2023/9

function adjustLights(lights) {
    let fallos1 = 0
    let fallos2 = 0

    for (let i = 0; i < lights.length; i++) {
        if (i % 2 === 0 && lights[i] !== '🟢') {//cadena 1
            fallos1++
        } else if (i % 2 !== 0 && lights[i] !== '🔴') {
            fallos1++
        }
        if (i % 2 === 0 && lights[i] !== '🔴') {//cadena 2
            fallos2++
        } else if (i % 2 !== 0 && lights[i] !== '🟢') {
            fallos2++
        }
    }
    return Math.min(fallos1, fallos2)
}
console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))