import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';


const routes: Routes = [
  { path: 'home', component: MainComponent},
  { path: 'favorite', component: FavoriteComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
