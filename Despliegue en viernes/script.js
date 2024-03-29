function transformTree(tree) {
    const arbolValor = value => ({
        value,
        left: null,
        right: null
    })
    if (tree.length === 0) {
        return null
    }

    const nodes = tree.map(val => (val !== null ? arbolValor(val) : null))

    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] !== null) {
            const leftChildIndex = 2 * i + 1
            const rightChildIndex = 2 * i + 2

            if (leftChildIndex < nodes.length) {
                nodes[i].left = nodes[leftChildIndex]
            }
            if (rightChildIndex < nodes.length) {
                nodes[i].right = nodes[rightChildIndex]
            }
        }
    }

    return nodes[0]
}
console.log(transformTree([1, 2, 3, 4, 5, 6, 7]))