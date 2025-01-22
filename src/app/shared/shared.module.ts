import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

// primeng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StepperModule } from 'primeng/stepper';
import { ToggleButton } from 'primeng/togglebutton';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { RadioButton, RadioButtonModule } from 'primeng/radiobutton';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { Toast } from 'primeng/toast';


// components
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const modules = [
  NgOptimizedImage,
  ButtonModule,
  InputTextModule,
  StepperModule,
  ToggleButton,
  IconField,
  InputIcon,
  CommonModule,
  RadioButtonModule,
  RadioButton,
  IconFieldModule,
  InputIconModule,
  FormsModule,
  DatePicker,
  FloatLabel,
  CarouselModule,
  ToastModule,
  Toast
];
const components = [NavBarComponent];

@NgModule({
  declarations: [NavBarComponent, ...components],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
