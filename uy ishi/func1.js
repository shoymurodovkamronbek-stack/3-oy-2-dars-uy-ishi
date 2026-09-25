const fs = require("fs");
const [a, b] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);
function yuza(a, b) {
    return a * b;
}

function peremetr(a, b) {
    return 2 * (a + b);
}


console.log(yuza(a, b), peremetr(a, b));
