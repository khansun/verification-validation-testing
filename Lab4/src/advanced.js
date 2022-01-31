
function pow(x, n) {
    if (x == 0 && n == 0) {
        return null;
    }
    else{
    return Math.pow(x, n);
    }
}

function modulo(a, b) {
    return a % b;
}

module.exports= { pow, modulo };