const tolerance = 0.00001;

function abs(x) {
    return x > 0
        ? x
        : x === 0
            ? 0
            : -x;
}

function average(x, y) {
    return (x + y) / 2;
}

function fixed_point(f, first_guess) {
    function close_enough(x, y) {
        return abs(x - y) < tolerance;
    }

    function try_with(guess) {
        const next = f(guess);
        return close_enough(guess, next)
            ? next
            : try_with(next);
    }

    return try_with(first_guess);
}

// console.log(fixed_point(Math.cos, 1)); // 0.7390822985224023
// console.log(fixed_point(y => Math.sin(y) + Math.cos(y),1)); // 1.2587315962971173

// function sqrt(x) {
//     return fixed_point(y => x / y, 1);
// }

function sqrt(x) {
    return fixed_point(y => average(y, x / y), 1);
}
