import { User } from './user';

export class Commentaire {
    id: number;
    contenu: String;
    date: Date;
    utilisateur: User;
}
