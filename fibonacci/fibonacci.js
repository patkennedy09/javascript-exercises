const fibonacci = function(n) {
    if (typeof n != "number") {
        n = Number(n);
    }
    
    if (n < 1) {
        return "OOPS";
    }
    let a = 0;
    let b = 1;
    let fib = 1;
    for (let i=2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    
    return fib;

}

module.exports = fibonacci
