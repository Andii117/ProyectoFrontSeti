import { TestBed } from '@angular/core/testing';

import { Mutant } from './mutant';

describe('Mutant', () => {
  let service: Mutant;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mutant);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
