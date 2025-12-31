function add_rat(x, y) {
    return make_rat(numer(x) * denom(y) + numer(y) * denom(x),
        denom(x) * denom(y));
}

function sub_rat(x, y) {
    return make_rat(numer(x) * denom(y) - numer(y) * denom(x),
        denom(x) * denom(y));
}

function mul_rat(x, y) {
    return make_rat(numer(x) * numer(y),
        denom(x) * denom(y));
}

function div_rat(x, y) {
    return make_rat(numer(x) * denom(y),
        denom(x) * numer(y));
}

function equal_rat(x, y) {
    return numer(x) * denom(y) === numer(y) * denom(x);
}

// function make_rat(n, d) {
//     return pair(n, d);
// }

function make_rat(n, d) {
    const g = gcd(n, d);
    return pair(n / g, d / g);
}

function gcd(a, b) {
    return b === 0 ? a: gcd(b, a % b);
}

function numer(x) {
    return head(x);
}

function denom(x) {
    return tail(x);
}

function pair(x, y) {
    return m => m === 0 ? x : y;
}

function head(p) {
    return p(0);
}

function tail(p) {
    return p(1);
}

function print_rat(x) {
    return display(stringify(numer(x)) + " / " + stringify(denom(x)));
}

function display(str) {
    console.log(str);
    return undefined;
}

function stringify(n) {
    return String(n);
}