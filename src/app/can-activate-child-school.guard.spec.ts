import { TestBed } from '@angular/core/testing';

import { CanActivateChildSchoolGuard } from './can-activate-child-school.guard';

describe('CanActivateChildSchoolGuard', () => {
  let guard: CanActivateChildSchoolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateChildSchoolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
