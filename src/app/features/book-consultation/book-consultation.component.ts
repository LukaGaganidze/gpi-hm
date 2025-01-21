import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BookConsStageOneComponent } from './componenets/book-cons-stage-one/book-cons-stage-one.component';
import { BookConsStageThreeComponent } from './componenets/book-cons-stage-three/book-cons-stage-three.component';
import { BookConsStageTwoComponent } from './componenets/book-cons-stage-two/book-cons-stage-two.component';
import { BookConsStageFourComponent } from './componenets/book-cons-stage-four/book-cons-stage-four.component';
import { BookConsStageFiveComponent } from './componenets/book-cons-stage-five/book-cons-stage-five.component';
import { BookConsStageSixComponent } from './componenets/book-cons-stage-six/book-cons-stage-six.component';

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
  templateUrl: './book-consultation.component.html',
  styleUrl: './book-consultation.component.scss',
})
export class BookConsultationComponent {}
