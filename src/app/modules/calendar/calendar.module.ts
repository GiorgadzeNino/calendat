import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

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
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { TimeSelectComponent } from '../../shared/components/time-select/time-select.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDrag } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [CalendarComponent, AddAppointmentComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TimeSelectComponent,
    TimeSelectComponent,
    DragDropModule,
    CdkDrag,
  ],
  providers: [
    CalendarService,
    {
      provide: MatDialogRef,
      useValue: {},
    },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    DatePipe,
  ],
})
export class CalendarModule {}
