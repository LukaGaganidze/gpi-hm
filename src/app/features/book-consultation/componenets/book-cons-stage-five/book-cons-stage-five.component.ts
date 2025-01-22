import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { DateFormatService } from '../../../../shared/services/date-format.service';
import { SharedModule } from '../../../../shared/shared.module';
import { Select, SelectChangeEvent } from 'primeng/select';
import {
  DoctorCard,
  doctorCards,
  StageFiveDropdown,
  stageFiveDropdowns,
} from './stage-five-data';
import { DocCardComponent } from './componenets/doc-card/doc-card.component';
import { ReservationInfo } from '../../../../shared/global-interfaces/reservation';
import { ReservationService } from '../../../../shared/services/reservation.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-book-cons-stage-five',
  imports: [SharedModule, Select, DocCardComponent],
  templateUrl: './book-cons-stage-five.component.html',
  styleUrl: './book-cons-stage-five.component.scss',
})
export class BookConsStageFiveComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  currentDate = new Date();

  stageFiveDropdownOptions = signal<StageFiveDropdown[] | []>([]);

  monthDays = signal<any[]>([]);

  formattedDate = signal<null | string>(null);

  responsiveOptions: any[] | undefined;

  selectedDate = signal<null | {
    date: Date;
    geoDate: string;
    geoWeekDay: string;
  }>(null);

  // time slots for docs
  docTimeSlotsInfo = signal<[] | DoctorCard[]>([]);

  // dropdown values
  selectionClinic = signal<string | null>(null);
  selectionLanguage = signal<string | null>(null);
  selectionPersonalDoctor = signal<string | null>(null);
  selectionSpecialization = signal<string | null>(null);
  selectionSpecialist = signal<string | null>(null);
  selectionResearch = signal<string | null>(null);
  selectionDoctor = signal<string | null>(null);

  // reservation info for stage 6
  currentResInfoState!: ReservationInfo;

  constructor(
    private dataFormatSer: DateFormatService,
    private resSer: ReservationService,
  ) {}

  ngOnInit() {
    this.formattedDate.set(
      this.dataFormatSer.formatToGeorgian(this.currentDate),
    );
    this.generateDays();
    this.stageFiveDropdownOptions.set(stageFiveDropdowns);
    this.initResponsiveSliderOptions();
    this.docTimeSlotsInfo.set(doctorCards);
    this.initCurrentReservationData();
  }

  initCurrentReservationData() {
    this.resSer.reservationInfo$
      .pipe(takeUntil(this.destroy$))
      .subscribe((reservationInfo: ReservationInfo) => {
        this.currentResInfoState = reservationInfo;
      });
  }

  handleSlotChange(e: {
    time: string;
    doc: string;
    speciality: string;
    clinicName: string;
    clinicAddress: string;
  }) {
    const updatedState: ReservationInfo = {
      ...this.currentResInfoState,
      time: e.time,
      doc: e.doc,
      speciality: e.speciality,
      clinicName: e.clinicName,
      clinicAddress: e.clinicAddress,
    };
    this.resSer.updateReservationInfo(updatedState);
  }

  onDateSelect(e: { date: Date; geoDate: string; geoWeekDay: string }) {
    // saving just in case
    this.selectedDate.set(e);

    // updating res state
    const updatedState: ReservationInfo = {
      ...this.currentResInfoState,
      date: e.date,
      geoDate: e.geoDate,
      geoWeekDay: e.geoWeekDay,
    };
    this.resSer.updateReservationInfo(updatedState);
  }

  handleChange(e: SelectChangeEvent) {
    const options:
      | 'კლინიკა'
      | 'ენა'
      | 'პირადი ექიმი'
      | 'სპეციალობა'
      | 'სპეციალისტი'
      | 'კვლევის დასახელება'
      | 'ექიმი' = e.value.for;

    switch (options) {
      case 'კლინიკა':
        this.selectionClinic.set(e.value.res);
        console.log('Selected Clinic:', e.value.res);
        break;

      case 'ენა':
        this.selectionLanguage.set(e.value.res);
        break;

      case 'პირადი ექიმი':
        this.selectionPersonalDoctor.set(e.value.res);
        break;

      case 'სპეციალობა':
        this.selectionSpecialization.set(e.value.res);
        break;

      case 'სპეციალისტი':
        this.selectionSpecialist.set(e.value.res);
        break;

      case 'კვლევის დასახელება':
        this.selectionResearch.set(e.value.res);
        break;

      case 'ექიმი':
        this.selectionDoctor.set(e.value.res);
        break;

      default:
        console.log('No valid option selected');
    }
  }

  private initResponsiveSliderOptions() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  private generateDays() {
    const startDay = new Date(this.currentDate); // Today
    const endDay = new Date(this.currentDate); // One month later
    endDay.setMonth(endDay.getMonth() + 1);

    let dateArray: string[] = [];

    let currentDate = new Date(startDay);
    while (currentDate <= endDay) {
      dateArray.push(currentDate.toDateString()); // Add the current date to the array
      currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    }

    const configured = this.configureMonthData(dateArray);
    this.monthDays.set(configured);
  }

  private configureMonthData(dates: string[]) {
    return dates.map((day) => {
      const curDay = new Date(day);
      return {
        date: curDay,
        geoDate: this.dataFormatSer.formatToGeorgian(curDay),
        geoWeekDay: this.dataFormatSer.getGeorgianWeekday(curDay),
      };
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
