//codigo para el reto js-> https://adventjs.dev/es/challenges/2023/2

function manufacture(gifts, materials) {
    const materialesUsar = materials.split('')
    let jugetesCreables = []
    gifts.forEach(juguete => {
        const caracteres = juguete.split('')
        let materialesDisponibles = 0
        caracteres.forEach(letra => {
            for (let i = 0; i < materialesUsar.length; i++) {
                if (letra == materialesUsar[i]) {
                    materialesDisponibles++
                    break
                }
            }
        })
        if (caracteres.length == materialesDisponibles) {
            jugetesCreables.push(juguete)
        }
    });
    return jugetesCreables
}
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
console.log(manufacture(gifts, materials))