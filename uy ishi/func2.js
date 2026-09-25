const fs = require("fs");
const [r1, r2, r3] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

function aylana(r) {
    return 2 * Math.PI *r;
}

const natija = aylana(r1)+aylana(r2) + aylana(r3);
console.log(natija.toFixed(2));