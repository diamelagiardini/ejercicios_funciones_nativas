const esValida = (contrasenia) => {
    if (contrasenia.length >= 8) {
        return true
    }
    else {
        return false
    }
}

esValida('contraseniaMuySegura') // true  
console.log(esValida('contraseniaMuySegura'))
esValida('abc123') // false
console.log(esValida('abc123'))

