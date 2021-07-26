const tienenMismaLongitud = (a, b) => {
    if (a.length === b.length) {
        return true
    }
    else {
        return false
    }
}

tienenMismaLongitud('javascript', 'java') // false
console.log(tienenMismaLongitud('javascript', 'java'));
tienenMismaLongitud('manzana', 'cerveza') // true
console.log(tienenMismaLongitud('manzana', 'cerveza'))