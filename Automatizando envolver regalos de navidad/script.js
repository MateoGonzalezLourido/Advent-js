//codigo del reto js-->https://2022.adventjs.dev/es/challenges/2022/1


function wrapping(gifts) {
    return gifts.map(item => {
        const n = '*'.repeat(item.length + 2)
        return n + '\n*' + item + '*\n' + n
    });
}
