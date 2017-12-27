import { User } from './user';
import { Commentaire } from './commentaire';

export class Cour {
    id: number;
    titre: String;
    contenu: string;
    date: Date;
    enseignant: User;
    note: number;
    commentaire: Commentaire[];
}
