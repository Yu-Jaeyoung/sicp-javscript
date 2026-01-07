const pair = (x, y) => [ x, y ];
const head = p => p[0];
const tail = p => p[1];

const is_null = x => x === null;

function list(...items) {
    if (items.length === 0) {
        return null;
    }
    return pair(items[0], list(...items.slice(1)));
}

function accumulate(op, initial, sequence) {
    return is_null(sequence)
        ? initial
        : op(head(sequence), accumulate(op, initial, tail(sequence)));
}

function map(f, sequence) {
    return accumulate(
        (x, y) => pair(f(x), y),
        null,
        sequence,
    );
}

function append(seq1, seq2) {
    return accumulate(pair, seq2, seq1);
}

console.log(append(list(1, 2), list(3, 4)));


/**
 * accumulate((x, y) => y + 1, 0, list(10, 20, 30))
 * 오른쪽부터:
 * op(30, 0) = 0 + 1 = 1
 * op(20, 1) = 1 + 1 = 2
 * op(10, 2) = 2 + 1 = 3
 */

function length(sequence) {
    return accumulate((x, y) => y + 1, 0, sequence);
}

console.log(length(list(10, 20, 30)));