import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { Dogwalker } from 'src/app/shared/interfaces/dogwalker.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DogWalkerService {
  private urlData = environment.urlListDogWalker;

  constructor(protected httpService: HttpService) {}

  consultListDogWalker(): Observable<Dogwalker[]> {
    return this.httpService.doGet<Dogwalker[]>(this.urlData);
  }
}
