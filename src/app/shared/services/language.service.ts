import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private isGeorgian = new BehaviorSubject<boolean>(true);
  isGeorgian$ = this.isGeorgian.asObservable();

  constructor() {}

  georgianLang() {
    this.isGeorgian.next(true);
  }

  englishLang() {
    this.isGeorgian.next(false);
  }
}
