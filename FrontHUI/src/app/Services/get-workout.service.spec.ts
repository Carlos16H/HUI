import { TestBed } from '@angular/core/testing';

import { GetWorkoutService } from './get-workout.service';

describe('GetWorkoutService', () => {
  let service: GetWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
