//codigo del reto js--> https://2022.adventjs.dev/es/challenges/2022/2

function countHours(year, holidays) {
    let cantidad_dias_festivos = 0
    holidays.forEach(fecha => {
        const dia_numero = new Date(`${year}/${fecha}`).getDay()
        if (dia_numero !== 0 && dia_numero !== 6) {
            cantidad_dias_festivos++
        }
    })
    return cantidad_dias_festivos * 2
}
