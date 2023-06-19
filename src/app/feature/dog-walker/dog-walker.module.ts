import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogWalkerRoutingModule } from './dog-walker-routing.module';
import { HomeDogWalkerComponent } from './components/home-dog-walker/home-dog-walker.component';
import { ListDogWalkerComponent } from './components/list-dog-walker/list-dog-walker.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerfilDogWalkerComponent } from './components/perfil-dog-walker/perfil-dog-walker.component';
import { DogWalkerService } from './services/dog-walker.service';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    HomeDogWalkerComponent,
    ListDogWalkerComponent,
    PerfilDogWalkerComponent,
    ContactComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    DogWalkerRoutingModule,
    HttpClientModule
  ],
  providers: [DogWalkerService, HttpService]
})
export class DogWalkerModule { }
