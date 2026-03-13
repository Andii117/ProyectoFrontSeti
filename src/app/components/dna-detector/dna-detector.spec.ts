import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnaDetector } from './dna-detector';

describe('DnaDetector', () => {
  let component: DnaDetector;
  let fixture: ComponentFixture<DnaDetector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DnaDetector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnaDetector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
