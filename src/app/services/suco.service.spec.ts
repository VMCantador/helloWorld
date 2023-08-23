import { TestBed } from '@angular/core/testing';

import { SucoService } from './suco.service';

describe('SucoService', () => {
  let service: SucoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SucoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
