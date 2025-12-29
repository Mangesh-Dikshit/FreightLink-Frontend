import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTracking } from './route-tracking';

describe('RouteTracking', () => {
  let component: RouteTracking;
  let fixture: ComponentFixture<RouteTracking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteTracking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteTracking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
