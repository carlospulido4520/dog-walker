import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./feature/auth/auth.module').then((mod) => mod.AuthModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
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
