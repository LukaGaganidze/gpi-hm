import { Component, OnInit, signal } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { FloatLabel } from 'primeng/floatlabel';
import {
  peopleDataPersonal,
  peopleDataForOthers,
  PersonData,
} from './stahe-one-data';

@Component({
  selector: 'app-book-cons-stage-one',
  imports: [SharedModule, FloatLabel],
  templateUrl: './book-cons-stage-one.component.html',
  styleUrl: './book-cons-stage-one.component.scss',
})
export class BookConsStageOneComponent implements OnInit {
  personSelection = signal<null | 'me' | 'others'>('me');

  chosenPerson = signal<null | string>(null);
  chosenPersonOther = signal<null | string>(null);

  // dummy data
  pListPersonal = signal<[] | PersonData[]>([]);
  pListOthers = signal<[] | PersonData[]>([]);

  personID: string = '';
  polNumber: string = '';
  birthDate: Date | undefined;

  constructor() {}

  ngOnInit() {
    this.pListPersonal.set(peopleDataPersonal);
    this.pListOthers.set(peopleDataForOthers);
  }

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
