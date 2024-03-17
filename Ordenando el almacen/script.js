//codigo para el reto js-> https://adventjs.dev/es/challenges/2023/8

function organizeGifts(gifts) {
    let caracteres = gifts.split('')
    let paquetes = []
    let texto = ''
    let number = ''
    caracteres.forEach(leter => {
        if (isNaN(Number(leter))) {
            texto += leter
        }
        else {
            if (texto != '') {
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
        //50 [letra]
        let n_bucle = Math.trunc(numero / 50)
        for (let i = 0; i < n_bucle; i++) {
            empaquetados += `[${letra}]`
        }
        numero -= n_bucle * 50
        //10 {letra}
        n_bucle = Math.trunc(numero / 10)
        for (let i = 0; i < n_bucle; i++) {
            empaquetados += `{${letra}}`
        }
        numero -= n_bucle * 10
        //(letra*sobrantes)
        if (numero > 0) {
            n_bucle = numero
            empaquetados += '('
            for (let i = 0; i < n_bucle; i++) {
                empaquetados += letra
            }
            empaquetados += ')'
        }

    })
    return empaquetados
}
console.log(organizeGifts('70b120a4c'))