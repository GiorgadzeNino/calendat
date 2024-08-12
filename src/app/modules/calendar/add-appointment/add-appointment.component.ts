import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CalendarService } from '../../../core/services/calendar.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
})
export class AddAppointmentComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<AddAppointmentComponent>);
  readonly data = inject<{ index: number }>(MAT_DIALOG_DATA);
  readonly calendarService = inject(CalendarService);
  readonly datePipe = inject(DatePipe);

  formGroup = new FormGroup({
    title: new FormControl('null', Validators.required),
    appointmentDate: new FormControl(this.calendarService.selectedDate),
    date: new FormControl(''),
    from: new FormControl<number>(0, Validators.required),
    to: new FormControl<number>(3, Validators.required),
    description: new FormControl('null'),
    color:new FormControl('cadetBlue')
  });
  constructor() {}

  ngOnInit() {}

  onDateChange(event: any): void {
    if (this.formGroup.value.appointmentDate) {
      const date = this.datePipe.transform(new Date(), 'EEEE, d MMMM');
      this.formGroup.get('date')?.setValue(date);
    }
  }

  save() {
    const newApp = this.formGroup.getRawValue();
    // debugger
    if (
      (this.formGroup.get('to')?.value as number) >= 0 &&
      (this.formGroup.get('from')?.value as number) >= 0
    ) {
      const diff =
        (this.formGroup.get('to')!.value as number) -
        (this.formGroup.get('from')!.value as number);
      const idx = Math.ceil((this.formGroup.get('to')!.value as number) / 4);
      this.calendarService
        .appointments()
        [idx].push({
          ...newApp,
          height: diff * 10,
          left: this.calendarService.appointments()[idx].length * 120 + 60,
        });
        this.dialogRef.close()
    }
    console.log(this.calendarService.appointments());
  }
}
