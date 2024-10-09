import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Bienvenue dans mon application Angular</h1>
    <button (click)="afficherMessage()">Cliquez ici</button>
    <p>{{ message }}</p>
  `,
})
export class AppComponent {
  message: string;

  constructor() {
    this.message = "Ceci est un message par défaut";
  }

  afficherMessage() {
    this.message = "Vous avez cliqué sur le bouton!";
  }

  // Erreur : méthode non définie
  afficherAutreMessage() {
    this.message = "Ceci est un autre message";
  }

  // Erreur : utilisation de 'var' au lieu de 'let' ou 'const'
  var x = 10; // Erreur de syntaxe

  // Erreur : méthode non utilisée
  ngOnInit() {
    this.afficherAutreMessage(); // Appel de méthode non définie
  }

  // Erreur : retour de type incorrect
  calculerSomme(a: number, b: number): string {
    return a + b; // Erreur : devrait retourner un nombre
  }
}