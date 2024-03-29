///codigo para el reto js-> https://adventjs.dev/es/challenges/2023/13
function calculateTime(deliveries) {
    let horaTotal = 0
    let minutoTotal = 0
    let segundoTotal = 0

    deliveries.forEach(time => {
        const data = time.split(':')
        horaTotal += Number(data[0])
        minutoTotal += Number(data[1])
        segundoTotal += Number(data[2])
    })
    if (segundoTotal >= 60) {
        minutoTotal += Math.trunc(segundoTotal / 60)
        segundoTotal = segundoTotal % 60
    }
    if (minutoTotal >= 60) {
        horaTotal += Math.trunc(minutoTotal / 60)
        minutoTotal = minutoTotal % 60
    }

    if (horaTotal < 7) {
        let horaRest = 7 - horaTotal
        let minRest = (minutoTotal > 0) ? 60 - minutoTotal : minutoTotal
        let segundoRest = (segundoTotal > 0) ? 60 - segundoTotal : segundoTotal
        if (minRest > 0) horaRest--
        if (segundoRest > 0) minRest--
        if (horaRest < 10) horaRest = '0' + horaRest
        if (minRest < 10) minRest = '0' + minRest
        if (segundoRest < 10) segundoRest = '0' + segundoRest
        return `-${horaRest}:${minRest}:${segundoRest}`
    }
    else {
        let horaRest = horaTotal - 7
        if (horaRest < 10) horaRest = '0' + horaRest
        if (minutoTotal < 10) minutoTotal = '0' + minutoTotal
        if (segundoTotal < 10) segundoTotal = '0' + segundoTotal
        return `${horaRest}:${minutoTotal}:${segundoTotal}`
    }
}