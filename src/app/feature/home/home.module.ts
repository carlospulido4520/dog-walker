import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';

@NgModule({
  declarations: [HomeComponent, TestimonialsComponent, TestimonialCardComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
