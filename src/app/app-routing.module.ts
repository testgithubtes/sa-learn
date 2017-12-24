import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursComponent } from './cours/cours.component';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'accueil'},
  {path: 'cours',component:CoursComponent},
  {path: 'about',component:AboutComponent},
  {path: 'accueil',component:AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
