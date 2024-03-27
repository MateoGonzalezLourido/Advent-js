//codigo para el reto js-> https://adventjs.dev/es/challenges/2023/4
function decode(message) {
    const stack = []
    let texto = ""

    for (let i = 0; i < message.length; i++) {
        if (message[i] === "(") {
            stack.push(texto)
            texto = ""
        } else if (message[i] === ")") {
            const reversedText = texto.split("").reverse().join("")
            texto = stack.pop() + reversedText
        } else {
            texto += message[i]
        }
    }

    return texto
}
console.log(decode('sa(u(cla)atn)s'))