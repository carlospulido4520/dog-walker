import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/shared/interfaces/testimonials.interface';
import { TestimonialsService } from '../../services/testimonials.service';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
})
export class TestimonialCardComponent implements OnInit {
  public testimonials: Testimonial[] = [];

  constructor(private testimonialsService: TestimonialsService) {}

  ngOnInit(): void {
    this.consultTestimonials();
  }

  async consultTestimonials() {
    this.testimonials = await this.testimonialsService
      .consultListTestimonials()
      .toPromise();
  }
}
