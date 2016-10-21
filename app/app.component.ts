import { Component } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1 class="text-center">Meal Tracker</h1>
    <new-log (newLogSender)="addLog($event)"></new-log>
    <log-list [childLogList]="masterLogList"></log-list>
  </div>
  `
})

export class AppComponent {
  public masterLogList: Log[] = [];
  addLog(newLogFromChild) {
    this.masterLogList.push(newLogFromChild);
  }
}
