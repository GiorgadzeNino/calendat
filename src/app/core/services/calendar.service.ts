import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CalendarService {
  emptyArr = Array.from({ length: 24 }, () => []);
  appointments = signal(this.emptyArr);

  constructor() {}
}
