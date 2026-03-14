import { TestBed } from '@angular/core/testing';

import { DnaHistory } from './dna-history';

describe('DnaHistory', () => {
  let service: DnaHistory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DnaHistory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
