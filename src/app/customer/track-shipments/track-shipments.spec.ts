import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackShipments } from './track-shipments';

describe('TrackShipments', () => {
  let component: TrackShipments;
  let fixture: ComponentFixture<TrackShipments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackShipments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackShipments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
