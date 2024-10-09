function calculerSomme(a, b) {
  return a + b;
}

function afficherSomme() {
  var a = 5;
  var b = "10"; // Erreur : addition d'un nombre et d'une chaîne
  console.log("La somme est: " + calculerSomme(a, b));
}

afficherSomme();

var tableau = [1, 2, 3, 4, 5];
for (var i = 0; i <= tableau.length; i++) {
  // Erreur : index hors limites
  console.log(tableau[i]);
}

function afficherMessage(message) {
  console.log(message);
}

afficherMessage("Ceci est un message"); // Appel correct

// Erreur : fonction non définie
afficherMesage("Ceci ne fonctionnera pas");

let x = 10;
if (x > 5) {
  let x = 20; // Erreur : portée de 'let' peut être déroutante
}
console.log(x); // Affiche 10

// Erreur : utilisation de 'this' dans une fonction non liée
const objet = {
  nom: "Objet",
  afficherNom: function () {
    console.log(this.nom);
  },
};

setTimeout(objet.afficherNom, 1000); // 'this' ne fait pas référence à 'objet'
