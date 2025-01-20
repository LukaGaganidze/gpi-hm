import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-book-consultation',
  imports: [SharedModule],
  templateUrl: './book-consultation.component.html',
  styleUrl: './book-consultation.component.scss',
})
export class BookConsultationComponent {
  activeStep: number = 1;

  name: string | undefined | null = null;

  email: string | undefined | null = null;

  password: string | undefined | null = null;

  option1: boolean | undefined = false;

  option2: boolean | undefined = false;

  option3: boolean | undefined = false;

  option4: boolean | undefined = false;

  option5: boolean | undefined = false;

  option6: boolean | undefined = false;

  option7: boolean | undefined = false;

  option8: boolean | undefined = false;

  option9: boolean | undefined = false;

  option10: boolean | undefined = false;
}
