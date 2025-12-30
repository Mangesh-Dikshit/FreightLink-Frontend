import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCarriers } from './assign-carriers';

describe('AssignCarriers', () => {
  let component: AssignCarriers;
  let fixture: ComponentFixture<AssignCarriers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignCarriers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignCarriers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
