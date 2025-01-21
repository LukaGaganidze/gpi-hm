import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConsStageFiveComponent } from './book-cons-stage-five.component';

describe('BookConsStageFiveComponent', () => {
  let component: BookConsStageFiveComponent;
  let fixture: ComponentFixture<BookConsStageFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookConsStageFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookConsStageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
