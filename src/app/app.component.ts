import { Component } from '@angular/core';

interface EventInform {
  event: string;
  
    day: number,
    month: string,
    year: number,

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-calendar-';

  displayedColumns: string[] = ['event', 'day', 'month', 'year'];

  eventInform: EventInform[] = [
    { event: 'work', day: 4, month: 'september', year: 2022 },
  ]

  allData() {
    return this.eventInform;
  }
}
