function lower_bound(x) {
    return head(x);
}

function upper_bound(x) {
    return tail(x);
}

function pair(x, y) {
    return m => m === 0 ? x: y;
}

function head(p) {
    return p(0);
}

function tail(p) {
    return p(1);
}

function make_interval(x, y) {
    return pair(x, y);
}

function add_interval(x, y) {
    return make_interval(
        lower_bound(x) + lower_bound(y),
        upper_bound(x) + upper_bound(y),
    );
}

function mul_interval(x, y) {
    const p1 = lower_bound(x) * lower_bound(y);
    const p2 = lower_bound(x) * upper_bound(y);
    const p3 = upper_bound(x) * lower_bound(y);
    const p4 = upper_bound(x) * upper_bound(y);
    return make_interval(
        Math.min(p1, p2, p3, p4),
        Math.max(p1, p2, p3, p4),
    );
}

function div_interval(x, y) {
    return mul_interval(x, make_interval(1 / upper_bound(y), 1 / lower_bound(y)));
}

const interval1 = make_interval(1, 2);
const interval2 = make_interval(3, 4);

const added_interval = add_interval(interval1, interval2);
const multiplied_interval = mul_interval(interval1, interval2);
const divided_interval = div_interval(interval1, interval2);

console.log('Added Interval: [' + lower_bound(added_interval) + ', ' + upper_bound(added_interval) + ']');
console.log('Multiplied Interval: [' + lower_bound(multiplied_interval) + ', ' + upper_bound(multiplied_interval) + ']');
console.log('Divided Interval: [' + lower_bound(divided_interval) + ', ' + upper_bound(divided_interval) + ']');
