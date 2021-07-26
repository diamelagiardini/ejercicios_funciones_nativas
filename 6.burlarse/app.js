const burlarse = (str) => {
    const burla = str.replace(/[aeiou]/gi, "i");
    return burla
}

burlarse('programar es dificil'); // 'prigimir is dificil'
console.log(burlarse('programar es dificil'));