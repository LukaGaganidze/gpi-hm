import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-book-cons-stage-two',
  imports: [],
  templateUrl: './book-cons-stage-two.component.html',
  styleUrl: './book-cons-stage-two.component.scss',
})
export class BookConsStageTwoComponent {
  personSelection = signal<null | string>(null);

  onSelectionChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    if (value === 'me') {
      this.personSelection.set(value);
    } else if (value === 'others') {
      this.personSelection.set(value);
    } else {
      this.personSelection.set(null);
    }
  }
}
