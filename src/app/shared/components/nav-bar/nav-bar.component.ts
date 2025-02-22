import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnDestroy, OnInit {
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

  toGeo() {
    this.langSer.georgianLang();
  }

  toEng() {
    this.langSer.englishLang();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
