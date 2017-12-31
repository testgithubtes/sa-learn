import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';

import { AuthService } from './../services/auth.service';
import { AdminComponent } from './admin.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AdminComponent,
    StudentComponent,
    TeacherComponent,
    LoginComponent,
    RegisterComponent
    ],
  providers: [
    AuthService
  ]
})
export class AdminModule { }
