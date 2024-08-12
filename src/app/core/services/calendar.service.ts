import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { Time } from '../../shared/models/calendar.model';

@Injectable()
export class CalendarService {
  emptyArr = Array.from({ length: 24 }, () => []);
  appointments = signal<any>(this.emptyArr);
  selectedDate = signal<Date>(new Date());

  constructor() {}

  generateTimeLine() {
    let times: Time[] = [];

    for (let i = 1; i <= 12; i++) {
      times.push({ time: `${i}AM`, value: i });
    }

    times.push({ time: '12PM', value: 12 });

    for (let i = 1; i <= 11; i++) {
      times.push({ time: `${i}PM`, value: i + 12 });
    }
    return times;
  }
}
