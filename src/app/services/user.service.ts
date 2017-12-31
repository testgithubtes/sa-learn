import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  users = [];

  constructor(private http: Http) { }

  getUsers() {
    this.http.get('http://localhost:3000/users').subscribe(res => {
      this.users[0] = res.json();
    })
  }
}
