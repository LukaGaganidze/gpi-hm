import {Component, OnInit} from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {Select} from 'primeng/select';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-book-cons-stage-four',
  imports: [SharedModule, Select],
  templateUrl: './book-cons-stage-four.component.html',
  styleUrl: './book-cons-stage-four.component.scss',
})
export class BookConsStageFourComponent implements OnInit {
  cities: City[] | undefined;

  value1: City | undefined;

  value2: City | undefined;

  value3: City | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
}
