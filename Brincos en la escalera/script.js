//codigo para el reto js-> https://adventjs.dev/es/challenges/2023/24
function getStaircasePaths(steps, maxJump) {
    const paths = []

    function generatePaths(currentPath, remainingSteps) {
        if (remainingSteps === 0) {
            paths.push(currentPath.slice())
            return
        }

        for (let jump = 1; jump <= maxJump && jump <= remainingSteps; jump++) {
            currentPath.push(jump)
            generatePaths(currentPath, remainingSteps - jump)
            currentPath.pop()
        }
    }

    generatePaths([], steps)
    return paths
}
