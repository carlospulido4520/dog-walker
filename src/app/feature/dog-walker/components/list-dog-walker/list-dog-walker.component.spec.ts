import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDogWalkerComponent } from './list-dog-walker.component';

describe('ListDogWalkerComponent', () => {
  let component: ListDogWalkerComponent;
  let fixture: ComponentFixture<ListDogWalkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDogWalkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDogWalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
