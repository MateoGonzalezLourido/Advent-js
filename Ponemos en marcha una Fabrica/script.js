//codigo para el reto js-> https://adventjs.dev/es/challenges/2023/2

function manufacture(gifts, materials) {
    const jugetesCreables = []
    gifts.forEach(juguete => {
        const caracteres = juguete.split('')
        let fabricable = true
        for (let i = 0; i < caracteres.length; i++) {
            const existe = materials.indexOf(caracteres[i])
            if (existe === -1) {
                fabricable = false
                break
            }
        }
        if (fabricable) {
            jugetesCreables.push(juguete)
        }
    })
    return jugetesCreables
}
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
console.log(manufacture(gifts, materials))