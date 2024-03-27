//codigo para el reto js->  https://adventjs.dev/es/challenges/2023/1
function findFirstRepeated(gifts) {
    const regalos = []
    for (let i = 0; i < gifts.length; i++) {
        if (regalos.includes(gifts[i]) === true) {
            return gifts[i]
        }
        regalos.push(gifts[i])
    }
    return -1
}
const giftIds = [5, 1, 5, 1]
console.log(findFirstRepeated(giftIds))