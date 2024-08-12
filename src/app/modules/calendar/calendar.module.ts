import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './page/calendar/calendar.component';
import { CalendarService } from '../../core/services/calendar.service';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CalendarComponent, AddAppointmentComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [
    CalendarService,
    {
      provide: MatDialogRef,
      useValue: {},
    },
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
})
export class CalendarModule {}
