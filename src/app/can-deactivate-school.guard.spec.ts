import { TestBed } from '@angular/core/testing';

import { CanDeactivateSchoolGuard } from './can-deactivate-school.guard';

describe('CanDeactivateSchoolGuard', () => {
  let guard: CanDeactivateSchoolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateSchoolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
