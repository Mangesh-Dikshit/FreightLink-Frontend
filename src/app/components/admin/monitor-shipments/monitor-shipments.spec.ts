import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorShipments } from './monitor-shipments';

describe('MonitorShipments', () => {
  let component: MonitorShipments;
  let fixture: ComponentFixture<MonitorShipments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorShipments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorShipments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
