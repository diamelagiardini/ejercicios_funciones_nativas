const sonIguales = (a,b) => {
    if (a.toUpperCase() === b.toUpperCase()) {
        return true
    }
    else {
        return false
    }
}

sonIguales('javascript', 'JavaScript') // true
console.log(sonIguales('javascript', 'JavaScript'))
sonIguales('AdA LoVeLaCe', 'Ada Lovelace')
console.log(sonIguales('AdA LoVeLaCe', 'Ada Lovelace'))// true
sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO') // false
console.log(sonIguales('NO ESTOY G2.RITANDO', 'ESTOY GRITANDO'))