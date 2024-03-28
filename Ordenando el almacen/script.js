//codigo para el reto js-> https://adventjs.dev/es/challenges/2023/8

function organizeGifts(gifts) {
    const caracteres = gifts.split('')
    const paquetes = []
    let texto = ''
    let number = ''
    caracteres.forEach(leter => {
        if (isNaN(Number(leter))) {
            texto += leter
        }
        else {
            if (texto !== '') {
                paquetes.push([number, texto])
                number = leter
                texto = ''
            }
            else {
                number += leter
            }
        }
    })
    paquetes.push([number, texto])
    let empaquetados = ''
    paquetes.forEach(paquete => {
        let numero = paquete[0]
        const letra = paquete[1]
        let n_bucle
        //50 [letra]
        n_bucle = Math.trunc(numero / 50)
        empaquetados += `[${letra}]`.repeat(n_bucle)
        numero -= n_bucle * 50
        //10 {letra}
        n_bucle = Math.trunc(numero / 10)
        empaquetados += `{${letra}}`.repeat(n_bucle)
        numero -= n_bucle * 10
        //(letra*sobrantes)
        if (numero > 0) {
            empaquetados += '(' + `${letra}`.repeat(numero) + ')'
        }
    })
    return empaquetados
}
console.log(organizeGifts('70b120a4c'))