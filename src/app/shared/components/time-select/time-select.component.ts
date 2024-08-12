import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  inject,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CalendarService } from '../../../core/services/calendar.service';

@Component({
  selector: 'app-time-select',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule],
  templateUrl: './time-select.component.html',
  styleUrl: './time-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TimeSelectComponent),
    },
    CalendarService,
  ],
})
export class TimeSelectComponent implements ControlValueAccessor {
  readonly changeDetectorRef = inject(ChangeDetectorRef);
  readonly calendarService = inject(CalendarService);

  /* Accessors requistments */
  value: any;
  disabled: boolean = false;

  timeList = this.generateTimeList();

  private onTouchedCallback: () => unknown = () => {};
  public onChangeCallback: (value: unknown | null) => void = () => {};

  public writeValue(value: unknown | null) {
    if (value !== this.value) {
      this.value = value;
      this.changeDetectorRef.detectChanges();
    }
    console.log(this.timeList);
  }
  public registerOnChange(onChange: (_: unknown | null) => unknown) {
    this.onChangeCallback = onChange;
  }
  public registerOnTouched(onTouched: () => unknown) {
    this.onTouchedCallback = onTouched;
  }
  public setDisabledState(disabled: boolean) {
    if (this.disabled !== disabled) {
      this.disabled = disabled;
      this.changeDetectorRef.detectChanges();
    }
  }

  change(e:any){
    console.log(e)
    this.onChangeCallback(e)
  }
  generateTimeList() {
    const times = [];
    let index = 0;
    let startTime = new Date();
    startTime.setHours(0, 0, 0, 0);

    while (startTime.getDate() === new Date().getDate()) {
      let hours = startTime.getHours();
      let minutes: string | number = startTime.getMinutes();
      let ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;

      let time = hours + ':' + minutes + ' ' + ampm;
      times.push({ time: time, value: index });
      // Increment time by 15 minutes
      startTime.setMinutes(startTime.getMinutes() + 15);
      index++;
    }
    console.log(times);
    return times;
  }
}
