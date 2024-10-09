function additionner(a: number, b: number): number {
  return a + b;
}

const resultat = additionner(5, "10"); // Erreur : argument de type 'string' au lieu de 'number'
console.log("Le résultat est: " + resultat);

let tableau: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i <= tableau.length; i++) {
  // Erreur : index hors limites
  console.log(tableau[i]);
}

interface Personne {
  nom: string;
  age: number;
}

const personne: Personne = {
  nom: "Alice",
  age: 30,
  // Erreur : propriété 'email' manquante
};

function afficherPersonne(personne: Personne) {
  console.log(`Nom: ${personne.nom}, Age: ${personne.age}`);
}

afficherPersonne(personne);

let x: number = 10;
if (x > 5) {
  let x: string = "Vingt"; // Erreur : redéclaration de 'x' avec un type différent
}
console.log(x); // Affiche 10

// Erreur : fonction non définie
function afficherMessage(message: string) {
  console.log(message);
}

afficherMesage("Ceci ne fonctionnera pas"); // Erreur de typographie
