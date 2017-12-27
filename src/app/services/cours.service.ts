import { Cour } from './../models/cour';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursService {

  constructor() { }
  cours: Cour[] = [{
    id: 1,
    titre: 'Cours-programmation',
    contenu: 'le cours porte sur',
    enseignant: {
      id: 1,
      nom: 'momo',
      prenom: 'rocwell',
      email: 'momo@yahoo.fr',
      enseignant: true
    },
    date: new Date,
    commentaire: [{
      id: 1,
      contenu: 'le cour n\'est pas mal',
      date: new Date,
      utilisateur: {
        id: 1,
        nom: 'momo',
        prenom: 'rocwell',
        email: 'momo@yahoo.fr',
        enseignant: true
      }

    }],
    note: 15,
  },
  {
    id: 2,
    titre: 'Cours-anglais',
    contenu: 'c\'est tres nule ce cours',
    enseignant: {
      id: 2,
      nom: 'brainda',
      prenom: 'elly',
      email: 'brainda@gmail.com',
      enseignant: false
    },
    date: new Date,
    commentaire: [{
      id: 1,
      contenu: 'vraiment je consiel pas ce cours',
      date: new Date,
      utilisateur: {
        id: 2,
        nom: 'kenfack',
        prenom: 'aurel',
        email: 'tata@yahoo.fr',
        enseignant: false
      }

    }],
    note: 5,
  }

  ];
  getAllCours(): Cour[] {
    return this.cours;
  }
  getCourById(id: number): Cour {
    return this.cours[id];
  }
}
