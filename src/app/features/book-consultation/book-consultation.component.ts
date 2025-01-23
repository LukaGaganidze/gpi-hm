import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BookConsStageOneComponent } from './componenets/book-cons-stage-one/book-cons-stage-one.component';
import { BookConsStageThreeComponent } from './componenets/book-cons-stage-three/book-cons-stage-three.component';
import { BookConsStageTwoComponent } from './componenets/book-cons-stage-two/book-cons-stage-two.component';
import { BookConsStageFourComponent } from './componenets/book-cons-stage-four/book-cons-stage-four.component';
import { BookConsStageFiveComponent } from './componenets/book-cons-stage-five/book-cons-stage-five.component';
import { BookConsStageSixComponent } from './componenets/book-cons-stage-six/book-cons-stage-six.component';
import { ReservationService } from '../../shared/services/reservation.service';
import { Subject, takeUntil } from 'rxjs';
import { ReservationInfo } from '../../shared/global-interfaces/reservation';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-book-consultation',
  imports: [
    SharedModule,
    BookConsStageOneComponent,
    BookConsStageTwoComponent,
    BookConsStageThreeComponent,
    BookConsStageFourComponent,
    BookConsStageFiveComponent,
    BookConsStageSixComponent,
  ],
  providers: [MessageService],
  templateUrl: './book-consultation.component.html',
  styleUrl: './book-consultation.component.scss',
})
export class BookConsultationComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  canGoToStageSix = signal<boolean>(false);

  resInfo!: ReservationInfo;

  constructor(
    private resSer: ReservationService,
    private messageSer: MessageService,
  ) {}

  ngOnInit() {
    this.validateStageSix();
  }

  validateStageSix() {
    this.resSer.reservationInfo$
      .pipe(takeUntil(this.destroy$))
      .subscribe((reservationInfo: ReservationInfo) => {
        this.resInfo = reservationInfo;
        const allValuesTruthy = Object.values(reservationInfo).every(
          (value) => !!value,
        );

        if (allValuesTruthy) {
          this.canGoToStageSix.set(true);
          console.log('All values are truthy:', reservationInfo);
        } else {
          this.canGoToStageSix.set(false);
          console.log('Some values are falsy:', reservationInfo);
        }
      });
  }

  addReservation() {
    if (this.resInfo && this.canGoToStageSix()) {
      this.resSer.updateReservations(this.resInfo);
      this.showSuccess();
    }
  }

  reset() {
    this.resSer.updateReservationInfo({
      date: null,
      doc: null,
      clinicAddress: null,
      clinicName: null,
      geoDate: null,
      geoWeekDay: null,
      speciality: null,
      time: null,
    });
  }

  private showSuccess() {
    this.messageSer.add({
      severity: 'success',
      summary: 'ჯავშანი გაკეტებულია',
      detail: 'ახალი ჯავშნისთვის თავიდან გაიარეთ flow',
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
