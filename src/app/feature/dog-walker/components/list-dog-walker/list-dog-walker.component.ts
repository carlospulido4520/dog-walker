import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Dogwalker } from 'src/app/shared/interfaces/dogwalker.interface';
import { DogWalkerService } from '../../services/dog-walker.service';

@Component({
  selector: 'app-list-dog-walker',
  templateUrl: './list-dog-walker.component.html',
  styleUrls: ['./list-dog-walker.component.scss'],
})
export class ListDogWalkerComponent implements OnInit {
  model: any;
  listDogwalker: Dogwalker[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dogWalkerService: DogWalkerService
  ) {}

  ngOnInit(): void {
    this.consultDogWalkers();
  }

  async consultDogWalkers() {
    this.listDogwalker = await this.dogWalkerService
      .consultListDogWalker()
      .toPromise();
  }

  goPerfil(id: string) {
    this.router.navigate(['/perfil'], {
      relativeTo: this.activeRoute,
      queryParams: { id },
    });
  }
}
