import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor (private http: HttpClient) { }
  registerUser (registerData) {
    this.http.post('http://localhost:3000/register', registerData).subscribe(res => {
        console.log(res);
    }  ,(err : HttpErrorResponse)=> {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        });
  }
  loginUser (loginData) {
    this.http.post('http://localhost:3000/login', loginData).subscribe(res => {
    console.log(res);
    localStorage.setItem('token',JSON.stringify(res));
  }

  );
  }
}
