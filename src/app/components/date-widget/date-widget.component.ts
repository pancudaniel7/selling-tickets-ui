import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-widget[dateDay][dateMonth][dateYear]',
  templateUrl: './date-widget.component.html',
  styleUrls: ['./date-widget.component.sass'],
})
export class DateWidgetComponent {
  @Input()
  dateDay?: string;

  @Input()
  dateMonth?: string;

  @Input()
  dateYear?: string;
}
