import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// primeng
import { ButtonModule } from 'primeng/button';

// components
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const modules = [ButtonModule];
const components = [NavBarComponent];

@NgModule({
  declarations: [NavBarComponent, ...components],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
