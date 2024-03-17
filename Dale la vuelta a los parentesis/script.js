function decode(message) {
    let texto = ""
    let parentesis = false
    for (let i = 0; i < message.length; i++) {
        if (!parentesis) {
            if (message[i] != "(") {
                texto += message[i]
            }
            else {
                parentesis = true
            }
        }
        else {
            let textoVolteado = ""
            for (let j = i; j < message.length; j++) {
                if (message[j] != "(") {
                    if (message[j] != ")") {
                        textoVolteado = message[j] + textoVolteado
                    }
                    else {
                        texto += textoVolteado
                        i = j
                        parentesis = false
                        break
                    }
                }
                else {
                    let parteTexto = ""
                    for (let k = j + 1; k < message.length; k++) {
                        if (message[k] != ")") {
                            parteTexto += message[k]
                        }
                        else {
                            j = k
                            textoVolteado = parteTexto + textoVolteado
                            break
                        }
                    }
                }
            }
        }
    }
    return texto
}
console.log(decode('sa(u(cla)atn)s'))