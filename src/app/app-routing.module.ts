import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursComponent } from './cours/cours.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cours'},
  {path: 'cours',component:CoursComponent},
  {path: 'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
