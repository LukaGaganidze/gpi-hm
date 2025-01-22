import { Component, OnInit, signal } from '@angular/core';
import { ReservationService } from '../../../../shared/services/reservation.service';
import { ReservationInfo } from '../../../../shared/global-interfaces/reservation';

@Component({
  selector: 'app-book-cons-stage-six',
  imports: [],
  templateUrl: './book-cons-stage-six.component.html',
  styleUrl: './book-cons-stage-six.component.scss',
})
export class BookConsStageSixComponent implements OnInit {
  reservationsSignal = signal<ReservationInfo[] | []>([]);

  constructor(private resSer: ReservationService) {}

  ngOnInit() {
    this.initReservation();
  }

  private initReservation() {
    this.resSer.reservations$.subscribe((reservations) => {
      this.reservationsSignal.set(reservations);
    });
  }
}
