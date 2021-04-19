let nom = ["F", "E", "R", "R", "4", "N"];
let i;

for (i = 0; i < nom.length; i++) {
    if (!isNaN(nom[i])) {
        console.log("Els noms de les persones no contenen el número " + nom[4]);
    } else {
        if (nom[i] == "A" || nom[i] == "E" || nom[i] == "I" || nom[i] == "O" || nom[i] == "U") {
            console.log("He trobat la vocal: " + nom[i]);
        } else {
            console.log("He trobat la consonant: " + nom[i]);
        }
    }
}