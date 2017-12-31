import { UserService } from './services/user.service';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CoursComponent } from './cours/cours.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SlideshowComponent } from './slideshow/slideshow.component';




@NgModule({
  declarations: [
    AppComponent,
    CoursComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    AccueilComponent,
    SlideshowComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    MatButtonModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
