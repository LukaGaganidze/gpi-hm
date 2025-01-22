import { Injectable } from '@angular/core';
import { ReservationInfo } from '../global-interfaces/reservation';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservationInfo = new BehaviorSubject<ReservationInfo>({
    time: null,
    doc: null,
    speciality: null,
    clinicName: null,
    clinicAddress: null,
    date: null,
    geoDate: null,
    geoWeekDay: null,
  });

  reservationInfo$ = this.reservationInfo.asObservable();

  private reservations = new BehaviorSubject<ReservationInfo[]>([]);
  reservations$ = this.reservations.asObservable();

  constructor() {}

  updateReservationInfo(reservationInfo: ReservationInfo) {
    this.reservationInfo.next(reservationInfo);
  }

  updateReservations(res: ReservationInfo) {
    const currentReservations = this.reservations.getValue();
    const updatedReservations = [...currentReservations, res];
    this.reservations.next(updatedReservations);
  }
}
