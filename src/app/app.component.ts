import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div>Bonjour <h2 class="nom">{{ nom }} :)</h2><h2 class="prenom">{{ prenom }} :)</h2></div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'my-app';
  nom : string;
  prenom: string;

  constructor(){
    this.nom = 'Angular';
    this.prenom = 'TypeScript';

  }
}
