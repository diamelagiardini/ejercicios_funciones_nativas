const esFraccionMayorAUno = (fraccion) => {
    if (fraccion.charAt(0) > fraccion.charAt(2)) {
        return true
    }
    else {
        return false
    }
}

esFraccionMayorAUno('1/2') // false
esFraccionMayorAUno('2/2') // false
esFraccionMayorAUno('4/2') // true


console.log(esFraccionMayorAUno('1/2'))
console.log(esFraccionMayorAUno('2/2'))
console.log(esFraccionMayorAUno('4/2'))