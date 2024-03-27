//codigo para el reto js-> https://adventjs.dev/es/challenges/2023/22

function compile(code) {
    let codigo = code.split('')
    let contador = 0
    let ptRetorto = -1
    for (let i = 0; i < codigo.length; i++) {
        const op = codigo[i]
        if (op !== ' ' && op !== '%' && op !== '?') {
            if (op === '¿') {//si contador>0
                if (contador <= 0) {//no se ejecuta
                    for (let j = i; j < codigo.length; j++) {
                        if (codigo[j] === '?') {
                            i = j
                            break
                        }
                    }
                }
            }
            else if (op === '<' && ptRetorto !== -1) {//retroceder?
                codigo[i] = ' '
                i = ptRetorto
            }
            else if (op === '+') {//sumar 1
                contador++
            }
            else if (op === '-') {//restar 1
                contador--
            }
            else if (op === '*') {//multiplicar por 2
                contador *= 2
            }
        }
        else if (op === '%') {
            ptRetorto = i
        }
    }

    return contador
}
console.log(compile('++%++<++¿*?'))