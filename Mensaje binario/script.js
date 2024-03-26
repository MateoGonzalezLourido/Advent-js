//codigo para el reto js-> https://adventjs.dev/es/challenges/2023/21

function findBalancedSegment(message) {
    let maxLength = 0
    let start = -1

    for (let i = 0; i < message.length; i++) {
        let zeros = 0
        let ones = 0

        for (let j = i; j < message.length; j++) {
            if (message[j] === 0) {
                zeros++
            } else {
                ones++
            }

            if (zeros === ones && (j - i + 1) > maxLength) {
                maxLength = j - i + 1
                start = i
            }
        }
    }

    if (start === -1) {
        return []
    } else {
        return [start, start + maxLength - 1]
    }
}
console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]))