const pair = (x, y) => [ x, y ];
const head = p => p[0];
const tail = p => p[1];

const is_null = x => x === null;

function is_pair(x) {
    return Array.isArray(x) && x.length === 2;
}

function is_list(x) {
    return x === null || (is_pair(x) && is_list(tail(x)));
}

function map(fun, items) {
    return is_null(items)
        ? null
        : pair(fun(head(items)),
            map(fun, tail(items)));
}

function accumulate(op, initial, sequence) {
    return is_null(sequence)
        ? initial
        : op(head(sequence), accumulate(op, initial, tail(sequence)));
}

function list(...items) {
    if (items.length === 0) {
        return null;
    }
    return pair(items[0], list(...items.slice(1)));
}

function to_list_notation(structure) {
    if (structure === null) {
        return null;
    }

    if (is_list(structure)) {
        const elements = [];
        let current = structure;

        while (current !== null) {
            const h = head(current);

            if (is_list(h)) {
                elements.push(to_list_notation(h));
            } else if (is_pair(h) && !is_list(h)) {
                elements.push(JSON.stringify(h));
            } else {
                elements.push(h);
            }

            current = tail(current);
        }

        return `list(${ elements.join(', ') })`;
    }

    return structure;
}

function append(list1, list2) {
    return is_null(list1)
        ? list2
        : pair(head(list1), append(tail(list1), list2));
}

function reverse(lst) {
    return accumulate((x, y) => append(y, list(x)), null, lst);
}

function deep_reverse(lst) {
    if (is_null(lst)) {
        return null;
    }

    if (!is_pair(lst)) {
        return lst;
    }

    return accumulate((x, y) => append(y, list(deep_reverse(x))), null, lst);
}

/*
function deep_reverse(lst) {
    if (is_null(lst)) {
        return null;
    }

    if (!is_pair(lst)) {
        return lst;
    }

    return reverse(map(deep_reverse, lst));
}
*/


const x = list(list(1, 2), list(3, 4));
console.log(to_list_notation(reverse(x)));
console.log(to_list_notation(deep_reverse(x)));
