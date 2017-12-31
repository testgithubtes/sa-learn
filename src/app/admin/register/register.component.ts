import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData= {};
  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  post(): void {
    console.log(this.registerData);
    this.authService.registerUser(this.registerData);
  }
}
