import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { ResultsComponent } from './results/results.component';


const routes: Routes = [
  {
    path:"",
    component:FavoritesComponent
  },
  {
    path:"user/:username",
    component:ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
