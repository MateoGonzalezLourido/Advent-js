//codigo del reto js->https://adventjs.dev/es/challenges/2023/17

function optimizeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let intervalos = []
    let intervalo = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        if (intervalo[1] >= intervals[i][0]) {
            if (intervalo[1] < intervals[i][1]) {
                intervalo[1] = intervals[i][1]
            }
        }
        else {
            intervalos.push(intervalo)
            intervalo = intervals[i]
        }
    }
    intervalos.push(intervalo)
    return intervalos
}
console.log(optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6]
]))