import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

// primeng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StepperModule } from 'primeng/stepper';

// components
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import {ToggleButton} from 'primeng/togglebutton';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';

const modules = [
  NgOptimizedImage,
  ButtonModule,
  InputTextModule,
  FormsModule,
  StepperModule,
  ToggleButton,
  IconField,
  InputIcon,
  CommonModule
];
const components = [NavBarComponent];

@NgModule({
  declarations: [NavBarComponent, ...components],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
