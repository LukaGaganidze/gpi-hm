import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateFormatService {
  private months = [
    'იან',
    'თებ',
    'მარ',
    'აპრ',
    'მაი',
    'ივნ',
    'ივლ',
    'აგვ',
    'სექ',
    'ოქტ',
    'ნოე',
    'დეკ',
  ];
  private weekdays = ['კვ', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'];

  formatToGeorgian(date: Date): string {
    const day = date.getDate();
    const month = this.months[date.getMonth()];
    return `${day} ${month}`;
  }

  getGeorgianWeekday(date: Date): string {
    const weekdayIndex = date.getDay();
    return this.weekdays[weekdayIndex];
  }
}
