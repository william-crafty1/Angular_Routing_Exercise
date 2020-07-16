import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';


const catsAndDogsRoutes: Routes = [
  {path: 'dog', component: DogComponent},
  {path: '', redirectTo: '/dog', pathMatch:'full'},
  {path: 'cat', component: CatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(catsAndDogsRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
