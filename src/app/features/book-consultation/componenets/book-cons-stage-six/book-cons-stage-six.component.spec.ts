import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConsStageSixComponent } from './book-cons-stage-six.component';

describe('BookConsStageSixComponent', () => {
  let component: BookConsStageSixComponent;
  let fixture: ComponentFixture<BookConsStageSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookConsStageSixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookConsStageSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
