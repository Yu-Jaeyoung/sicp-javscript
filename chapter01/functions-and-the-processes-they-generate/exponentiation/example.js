// function expt(b, n) {
//     return n === 0
//         ? 1
//         : b * expt(b, n-1);
// }

function expt(b, n) {
    return expt_iter(b, n, 1);
}

function expt_iter(b, counter, product) {
    return counter === 0
        ? product
        : expt_iter(b, counter - 1, b * product);
}

function fast_expt(b, n) {
    return n === 0
        ? 1
        : is_even(n)
            ? square(fast_expt(b, n / 2))
            : b * fast_expt(b, n - 1);
}

function is_even(n) {
    return n % 2 === 0;
}