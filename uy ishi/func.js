const fs = require("fs");
const [a, b, c] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

function min() {
    let min = a;

    if (b < min) min =b;
    if (c < min) min =c;
    return min;
}

function mid() {
    if ((a >= b && a <= c) || (a >= c && a <= b)) return a;
    if ((b >= a && b <= c) || (b >= c && b <= a)) return b;
    return c;
}

function max() {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

console.log(min(), mid(), max());