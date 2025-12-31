function gcd(a, b) {
    return b === 0 ? a: gcd(b, a % b);
}

function pair(x, y) {
    return m => m === 0 ? x: y;
}

function make_rat(n, d) {
    const g = gcd(Math.abs(n), Math.abs(d));
    return d < 0
        ? pair(-n / g, -d / g)
        : pair(n / g, d / g);
}

function head(p) {
    return p(0);
}

function tail(p) {
    return p(1);
}