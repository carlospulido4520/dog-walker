import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { Testimonial } from 'src/app/shared/interfaces/testimonials.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  private urlData = environment.urlJsonData;

  constructor(private httpService: HttpService) {}

  consultListTestimonials(): Observable<Testimonial[]> {
    return this.httpService.doGet<Testimonial[]>(
      `${this.urlData}testimonials.json`
    );
  }
}
