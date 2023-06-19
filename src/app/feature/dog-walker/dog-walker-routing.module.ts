import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDogWalkerComponent } from './components/home-dog-walker/home-dog-walker.component';
import { ListDogWalkerComponent } from './components/list-dog-walker/list-dog-walker.component';
import { PerfilDogWalkerComponent } from './components/perfil-dog-walker/perfil-dog-walker.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDogWalkerComponent,
    children: [
      { path: 'search', component: ListDogWalkerComponent },
      { path: 'perfil', component: PerfilDogWalkerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogWalkerRoutingModule {}
