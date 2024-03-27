//codigo para el reto js-> https://adventjs.dev/es/challenges/2023/23

function organizeChristmasDinner(dishes) {
    const resultado = []
    const platosConjunto = dishes.join(',').split(',')
    let ingredientesRepetidos

    ingredientesRepetidos = platosConjunto.filter(
        (element, index) =>
            platosConjunto.indexOf(element) !== index
    )
    ingredientesRepetidos = [...new Set(ingredientesRepetidos)]

    ingredientesRepetidos.sort((a, b) => a.localeCompare(b));

    ingredientesRepetidos.forEach(ingrediente => {
        let data = []
        dishes.forEach(plato => {
            if (plato.indexOf(ingrediente) !== -1) {
                data.push(plato[0])
            }
        })
        data.sort((a, b) => a[0].localeCompare(b[0]));
        data.unshift(ingrediente)
        resultado.push(data)
    })
    return resultado
}
console.log(organizeChristmasDinner([
    ["pumpkin pie", "pumpkin", "cinnamon", "sugar", "flour"],
    ["mashed potatoes", "potatoes", "butter", "milk"],
    ["cinnamon rolls", "flour", "cinnamon", "butter", "sugar"],
    ["turkey stuffing", "bread crumbs", "celery", "onion", "butter"]
]))