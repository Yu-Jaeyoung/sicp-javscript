function cube(x) {
    return x * x * x;
}

// function sum_integers(a, b) {
//     return a > b
//         ? 0
//         : a + sum_integers(a + 1, b);
// }

// function sum_cubes(a, b) {
//     return a > b
//         ? 0
//         : cube(a) + sum_cubes(a + 1, b);
// }

// function pi_sum(a, b) {
//     return a > b
//         ? 0
//         : 1 / (a * (a + 2)) + pi_sum(a + 4, b);
// }

function sum(term, a, next, b) {
    return a > b
        ? 0
        : term(a) + sum(term, next(a), next, b);
}

function inc(n) {
    return n + 1;
}

function sum_cubes(a, b) {
    return sum(cube, a, inc, b);
}

// console.log(sum_cubes(1, 10)); // 3025

function identity(x) {
    return x;
}

function sum_integers(a, b) {
    return sum(identity, a, inc, b);
}

// console.log(sum_integers(1, 10)); // 55

function pi_sum(a, b) {
    function pi_term(x) {
        return 1 / (x * (x + 2));
    }

    function pi_next(x) {
        return x + 4;
    }

    return sum(pi_term, a, pi_next, b);
}

// console.log(8 * pi_sum(1, 1000)); // 3.139592655589783


function integral(f, a, b, dx) {
    function add_dx(x) {
        return x + dx;
    }

    return sum(f, a + dx / 2, add_dx, b) * dx;
}

// console.log(integral(cube, 0, 1, 0.01));  // 0.24998750000000042
// console.log(integral(cube, 0, 1, 0.001)); // 0.249999875000001

