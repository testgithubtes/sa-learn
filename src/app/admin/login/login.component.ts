import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData= {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  post() {
    this.authService.loginUser(this.loginData);
  }

}
