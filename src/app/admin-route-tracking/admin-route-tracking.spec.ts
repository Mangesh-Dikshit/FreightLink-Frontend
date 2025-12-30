import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRouteTracking } from './admin-route-tracking';

describe('AdminRouteTracking', () => {
  let component: AdminRouteTracking;
  let fixture: ComponentFixture<AdminRouteTracking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRouteTracking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRouteTracking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
