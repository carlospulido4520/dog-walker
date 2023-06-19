import { TestBed } from '@angular/core/testing';

import { DogWalkerService } from './dog-walker.service';

describe('DogWalkerService', () => {
  let service: DogWalkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogWalkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
