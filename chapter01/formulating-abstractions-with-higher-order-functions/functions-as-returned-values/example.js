function average(x, y) {
    return (x + y) / 2;
}

function square(x) {
    return x * x;
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

function average_damp(f) {
    return x => average(x, f(x));
}

// console.log(average_damp(square)(10)); // 55

// function sqrt(x) {
//     return fixed_point(average_damp(y => x / y), 1);
// }

function cube_root(x) {
    return fixed_point(average_damp(y => x / square(y)), 1);
}

const dx = 0.00001;

function deriv(g) {
    return x => (g(x + dx) - g(x)) / dx;
}

function cube(x) {
    return x * x * x;
}

// console.log(deriv(cube)(5));

function newton_transform(g) {
    return x => x - g(x) / deriv(g)(x);
}

function newton_method(g, guess) {
    return fixed_point(newton_transform(g), guess);
}

// function sqrt(x) {
//     return newton_method(y => square(y) - x, 1);
// }

function fixed_point_of_transform(g, transform, guess) {
    return fixed_point(transform(g), guess);
}

// function sqrt(x) {
//     return fixed_point_of_transform(
//         y => x / y,
//         average_damp,
//         1,
//     );
// }

function sqrt(x) {
    return fixed_point_of_transform(
        y => square(y) - x,
        newton_transform,
        1,
    );
}