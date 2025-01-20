import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/book-consultation', pathMatch: 'full' },
  {
    path: 'book-consultation',
    loadComponent: () =>
      import('./features/book-consultation/book-consultation.component').then(
        (c) => c.BookConsultationComponent,
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];
