import { Component, OnInit } from '@angular/core';
import { DogWalkerService } from '../../services/dog-walker.service';
import { Dogwalker } from 'src/app/shared/interfaces/dogwalker.interface';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-perfil-dog-walker',
  templateUrl: './perfil-dog-walker.component.html',
  styleUrls: ['./perfil-dog-walker.component.scss'],
})
export class PerfilDogWalkerComponent implements OnInit {
  dogWalker: Dogwalker;
  idDogWalker: string = '';

  constructor(
    private dogWalwerService: DogWalkerService,
    private activeRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe({
      next: (route) => {
        ({ id: this.idDogWalker } = route);
        if (this.idDogWalker) {
          this.consulDogWalkerByID(this.idDogWalker);
        }
      },
    });
  }

  async consulDogWalkerByID(id: string) {
    this.dogWalker = await this.dogWalwerService
      .consultDogWalkerById(id)
      .toPromise();
  }

  contac() {
    const modalRef = this.modalService.open(ContactComponent, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
		modalRef.componentInstance.name = 'World';
  }
}
