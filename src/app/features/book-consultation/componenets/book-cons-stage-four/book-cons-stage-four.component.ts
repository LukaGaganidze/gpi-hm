import { Component, OnInit, signal } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { Select } from 'primeng/select';
import { clinicsData, citiesData, City, ClinicsData } from './stage-four-data';

@Component({
  selector: 'app-book-cons-stage-four',
  imports: [SharedModule, Select],
  templateUrl: './book-cons-stage-four.component.html',
  styleUrl: './book-cons-stage-four.component.scss',
})
export class BookConsStageFourComponent implements OnInit {
  cities = signal<City[] | undefined>(undefined);
  city: City | undefined;
  clinicSelection = signal<null | string>(null);
  clinicsDataSignal = signal<[] | ClinicsData[]>([]);
  clinicName = '';

  ngOnInit() {
    this.clinicsDataSignal.set(clinicsData);
    this.cities.set(citiesData);
  }

  filterClinics() {
    const query = this.clinicName.toLowerCase();
    const filteredClinics = clinicsData.filter((clinic) =>
      clinic.clinicName.toLowerCase().includes(query),
    );
    this.clinicsDataSignal.set(filteredClinics);
  }

  onSelectionChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
  }
}
