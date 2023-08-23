import { TestBed } from '@angular/core/testing';

import { RefrigeranteService } from './refrigerante.service';

describe('RefrigeranteService', () => {
  let service: RefrigeranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefrigeranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
