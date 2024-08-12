import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
})
export class AddAppointmentComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<AddAppointmentComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  constructor() {}

  ngOnInit() {}
}
