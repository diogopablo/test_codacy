
#include <iostream>
#include <vector>
#include <string>
using namespace std;

void afficherSomme(int a, int b) {
    cout << "La somme de " << a << " et " << b << " est: " << a + b << endl;
}

void afficherMoyenne(vector<int> nombres) {
    int somme = 0;
    for (int i = 0; i <= nombres.size(); i++) { // Erreur : utilisation d'un index hors limites
        somme += nombres[i];
    }
    cout << "La moyenne est: " << somme / nombres.size() << endl; // Erreur : division par zéro potentielle
}

int main() {
    cout << "Bonjour, monde!" << endl;
    
    int a = 5;
    int b = 0;
    // Erreur : division par zéro
    cout << "Le résultat de la division est: " << a / b << endl;
    
    afficherSomme(a, b);

    vector<int> nombres = {10, 20, 30, 40};
    afficherMoyenne(nombres);

    string nom;
    cout << "Entrez votre nom: ";
    cin >> nom;
    cout << "Bonjour, " << nom << "!" << endl;

    // Boucle infinie (erreur logique)
    while (true) {
        cout << "Ceci est une boucle infinie." << endl;
        break; // La boucle ne doit pas se terminer ici
    }

    // Calcul hypothétique d'un complexe
    complex<double> c1(1, 2), c2(3, 4);
    cout << "La somme des complexes est: " << c1 + c2 << endl; // Erreur : utiliser std::complex sans inclure <complex>

    return 0; // Erreur : retour implicite dans main
}