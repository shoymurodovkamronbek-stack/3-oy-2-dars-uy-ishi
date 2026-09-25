const fs = require("fs");
const n = parseInt(fs.readFileSync(0, "utf8").trim());

function summ(n) {
    return Math.floor(n / 100) + Math.floor(n / 10) % 10 + n % 10;
}
function jt(n) {
    if (n % 2 === 0) {
        console.log("juft");
    } else {
        console.log("toq");
    }
}

jt(summ(n));