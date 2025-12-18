function is_even(n) {
    return n % 2 === 0;
}

// function expmod(base, exp, m) {
//     return exp === 0
//         ? 1
//         : is_even(exp)
//             ? (expmod(base, exp / 2, m)
//             * expmod(base, exp / 2, m)) % m:
//             (base * expmod(base, exp - 1, m)) % m;
// }

// function expmod(base, exp, me) {
//     const half_exp = expmod(base, exp / 2, m);
//     return exp === 0
//         ? 1
//         : is_even(exp)
//             ? (half_exp * half_exp) % m
//             : (base * expmod(base, exp - 1, m)) % m;
// }

function expmod(base, exp, m) {
    if (exp === 0) {
        return 1;
    } else {
        if (is_even(exp)) {
            const half_exp = expmod(base, exp / 2, m);
            return (half_exp * half_exp) % m;
        } else {
            return (base * expmod(base, exp - 1, m)) % m;
        }
    }
}