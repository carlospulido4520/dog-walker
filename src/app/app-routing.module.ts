import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./feature/auth/auth.module').then((mod) => mod.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./feature/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'dog-walker',
    loadChildren: () =>
      import('./feature/dog-walker/dog-walker.module').then(
        (mod) => mod.DogWalkerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
