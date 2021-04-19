var nom = ["F", "E", "R", "R", "A", "N"];
var lletres = new Map();
for (i = 0; i < nom.length; i++) {
    if (lletres.has(nom[i])) {
        lletres.set(nom[i], lletres.get(nom[i]) + 1);
    } else {
        lletres.set(nom[i], 1);
    }
}
console.log(lletres);