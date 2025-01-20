import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../shared/services/language.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  isGeorgian = signal<boolean>(true);

  constructor(private langSer: LanguageService) {}

  ngOnInit() {
    this.iniLang();
  }

  iniLang() {
    this.langSer.isGeorgian$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isGeorgian) => {
        console.log(isGeorgian);
        this.isGeorgian.set(isGeorgian);
      });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
