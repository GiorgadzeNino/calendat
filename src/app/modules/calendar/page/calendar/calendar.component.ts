import { Component, inject, OnInit } from '@angular/core';
import { Time } from '../../../../shared/models/calendar.model';
import { CalendarService } from '../../../../core/services/calendar.service';
import {
  MatDialog,
} from '@angular/material/dialog';
import { AddAppointmentComponent } from '../../add-appointment/add-appointment.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  times: Time[] = [];

  readonly calendarService = inject(CalendarService);
  readonly dialog = inject(MatDialog);

  ngOnInit() {
    this.generateTimeLine();
  }

  generateTimeLine() {
    for (let i = 1; i <= 12; i++) {
      this.times.push({ time: `${i}AM`, value: i });
    }

    this.times.push({ time: '12PM', value: 12 });

    for (let i = 1; i <= 11; i++) {
      this.times.push({ time: `${i}PM`, value: i + 12 });
    }
  }

  addAppointment(index: number) {
    const dialogRef = this.dialog.open(AddAppointmentComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
      }
    });
  }
}
