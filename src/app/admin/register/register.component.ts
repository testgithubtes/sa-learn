import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData= {};
  constructor() {}

  ngOnInit() {
  }

  post(): void {
    console.log(this.registerData);
  }
}
