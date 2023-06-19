import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/shared/interfaces/testimonials.interface';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
})
export class TestimonialCardComponent implements OnInit {
  public testimonials: Testimonial[] = [];


  ngOnInit(): void {
    this.testimonials = [
      {
        name: 'German',
        avatar: '../../assets/images/avatar-1.jpg',
        testimonial: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quam
        magnam earum quibusdam impedit velit explicabo suscipit accusamus
        beatae, soluta quo alias asperiores quia consequuntur odio voluptatum,
        dolores ullam fugiat.`,
        date: '15/12/2021 · 8:15 AM',
      },
      {
        name: 'Marina',
        avatar: '../../assets/images/avatar-2.avif',
        testimonial: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quam
        magnam earum quibusdam impedit velit explicabo suscipit accusamus
        beatae, soluta quo alias asperiores quia consequuntur odio voluptatum,
        dolores ullam fugiat.`,
        date: '15/12/2021 · 8:15 AM',
      },
      {
        name: 'Andres',
        avatar: '../../assets/images/avatar-3.jpg',
        testimonial: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quam
        magnam earum quibusdam impedit velit explicabo suscipit accusamus
        beatae, soluta quo alias asperiores quia consequuntur odio voluptatum,
        dolores ullam fugiat.`,
        date: '15/12/2021 · 8:15 AM',
      },
    ];
  }
}
