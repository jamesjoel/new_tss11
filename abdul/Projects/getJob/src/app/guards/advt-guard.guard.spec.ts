import { TestBed, async, inject } from '@angular/core/testing';

import { AdvtGuardGuard } from './advt-guard.guard';

describe('AdvtGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvtGuardGuard]
    });
  });

  it('should ...', inject([AdvtGuardGuard], (guard: AdvtGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
