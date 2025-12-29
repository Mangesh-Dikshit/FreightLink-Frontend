import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFreight } from './book-frieght';

describe('BookFrieght', () => {
  let component: BookFreight;
  let fixture: ComponentFixture<BookFreight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookFreight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookFreight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
