import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightDetails } from './freight-details';

describe('FreightDetails', () => {
  let component: FreightDetails;
  let fixture: ComponentFixture<FreightDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreightDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreightDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
