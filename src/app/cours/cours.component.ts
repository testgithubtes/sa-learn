import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  constructor(private userService:UserService) { 
    console.log(this.userService.users);
  }
  
  ngOnInit() {
    this.userService.getUsers();

  }

}
