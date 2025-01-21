import { Component, OnInit, signal } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { writeErrorToLogFile } from '@angular/cli/src/utilities/log-file';
import { FloatLabel } from 'primeng/floatlabel';
// import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-cons-stage-one',
  imports: [SharedModule, FloatLabel],
  templateUrl: './book-cons-stage-one.component.html',
  styleUrl: './book-cons-stage-one.component.scss',
})
export class BookConsStageOneComponent implements OnInit {
  personSelection = signal<null | 'me' | 'others'>('others');

  chosenPerson = signal<null | string>(null);
  chosenPersonOther = signal<null | string>(null);

  personID: string = '';
  polNumber: string = '';
  birthDate: Date | undefined;

  constructor() {}

  ngOnInit() {}

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

  onPersonSelectionChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.chosenPerson.set(value);
  }

  onPersonSelectionOtherChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.chosenPersonOther.set(value);
  }
}
