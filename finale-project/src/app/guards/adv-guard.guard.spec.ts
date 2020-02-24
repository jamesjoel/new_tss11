import { TestBed, async, inject } from '@angular/core/testing';

import { AdvGuardGuard } from './adv-guard.guard';

describe('AdvGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvGuardGuard]
    });
  });

  it('should ...', inject([AdvGuardGuard], (guard: AdvGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
