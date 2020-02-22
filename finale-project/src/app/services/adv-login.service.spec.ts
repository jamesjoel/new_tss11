import { TestBed } from '@angular/core/testing';

import { AdvLoginService } from './adv-login.service';

describe('AdvLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvLoginService = TestBed.get(AdvLoginService);
    expect(service).toBeTruthy();
  });
});
