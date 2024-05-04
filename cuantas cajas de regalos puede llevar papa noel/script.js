//codigo del reto js--> https://2022.adventjs.dev/es/challenges/2022/3

function distributeGifts(packOfGifts, reindeers) {
    let peso_regalos = 0
    packOfGifts.forEach(item => peso_regalos += item.length)
    let peso_maximo_renos = 0
    reindeers.forEach(name => peso_maximo_renos += name.length)
    return Math.floor((peso_maximo_renos * 2) / peso_regalos)
}