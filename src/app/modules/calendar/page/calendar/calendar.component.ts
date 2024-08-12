import { Component, inject, OnInit } from '@angular/core';
import { Time } from '../../../../shared/models/calendar.model';
import { CalendarService } from '../../../../core/services/calendar.service';
import { MatDialog } from '@angular/material/dialog';
import { AddAppointmentComponent } from '../../add-appointment/add-appointment.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  times: Time[] = [];
  date: Date = new Date();

  readonly calendarService = inject(CalendarService);
  readonly dialog = inject(MatDialog);

  ngOnInit() {
    this.times = this.calendarService.generateTimeLine();
  }


  addAppointment(index: number) {
    const dialogRef = this.dialog.open(AddAppointmentComponent, {
      minWidth: 450,
      data: {
        index: index,
      },
    });
  }
  changeDate(){}
}
