import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DoctorCard } from '../../stage-five-data';
import { SharedModule } from '../../../../../../shared/shared.module';

@Component({
  selector: 'app-doc-card',
  imports: [SharedModule],
  templateUrl: './doc-card.component.html',
  styleUrl: './doc-card.component.scss',
})
export class DocCardComponent {
  @Input('docInfo') docInfo!: DoctorCard;
  @Output() slotChange = new EventEmitter<{
    time: string;
    doc: string;
    speciality: string;
    clinicName: string;
    clinicAddress: string;
  }>();

  selectedSlot!: {
    time: string;
    doc: string;
    speciality: string;
    clinicName: string;
    clinicAddress: string;
  };

  onSlotChange(): void {
    this.slotChange.emit(this.selectedSlot);
  }
}
