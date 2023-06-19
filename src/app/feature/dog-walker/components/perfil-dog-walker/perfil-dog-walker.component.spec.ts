import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDogWalkerComponent } from './perfil-dog-walker.component';

describe('PerfilDogWalkerComponent', () => {
  let component: PerfilDogWalkerComponent;
  let fixture: ComponentFixture<PerfilDogWalkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilDogWalkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDogWalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
