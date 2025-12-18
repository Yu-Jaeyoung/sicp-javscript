function square(x) {
    return x * x;
}

function pi_sum(a, b) {
    return sum(
        x => 1 / (x * (x + 2)),
        a,
        x => x + 4,
        b,
    );
}

function integral(f, a, b, dx) {
    return sum(
        f,
        a + dx / 2,
        x => x + dx,
        b,
    ) * dx;
}

function f(x, y) {
    function f_helper(a, b) {
        return x * square(a) + y * b + a * b;
    }

    return f_helper(1 + x * y, 1 - y);
}

function f_2(x, y) {
    return ((a, b) => x * square(a) + y * b + a * b
    )(1 + x * y, 1 - y);
}

function f_3(x, y) {
    const a = 1 + x * y;
    const b = 1 - y;
    return x * square(a) + y * b + a * b;
}