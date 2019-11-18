import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Post {
  created_at: Date;

  constructor(public title: string, public Content: string, public LovIts: number) {
    this.created_at = new Date();
  }
}
export class PostserviceService {

  posts = [
   new Post("Mon premier post", "Maurizio Sarri, son coach à Turin, a évoqué un souci au niveau du genou. Sans confirmer la nature sa blessure, la star de 35 ans a donné des précisions.", 1),
   new Post("Mon deuxième post", "Lors de ces deux matchs avec la sélection, je n’étais pas à 100%. Je me suis sacrifié pour la Juventus et la Selecçao",  -1),
   new Post("Encore un post", "Dieu merci, je ne me suis jamais trop blessé durant ma carrière. Mais ça peut arriver", 0),
   new Post("Post 4", "Dès fois, je ne donne pas plus parce que ne je n’y arrive pas. On a lancé une polémique qui n’aurait jamais dû exister", 0)
  ]

}
