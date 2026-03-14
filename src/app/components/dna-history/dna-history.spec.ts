import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnaHistory } from './dna-history';

describe('DnaHistory', () => {
  let component: DnaHistory;
  let fixture: ComponentFixture<DnaHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DnaHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnaHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
