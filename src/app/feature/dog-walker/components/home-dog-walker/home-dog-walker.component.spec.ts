import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDogWalkerComponent } from './home-dog-walker.component';

describe('HomeDogWalkerComponent', () => {
  let component: HomeDogWalkerComponent;
  let fixture: ComponentFixture<HomeDogWalkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDogWalkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDogWalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
