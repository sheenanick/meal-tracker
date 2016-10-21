import { Component } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1 class="text-center jumbotron">Meal Tracker</h1>
    <div class="row">
      <div class="col-sm-4">
        <h3>Calories</h3>
      </div>
      <div class="col-sm-4">
        <log-list [childLogList]="masterLogList"></log-list>
      </div>
      <div class="col-sm-4" id="new-form">
        <button class="btn btn-primary" (click)="newLogClicked()">Create Log</button>
        <new-log [showForm]="showForm" (newLogSender)="addLog($event)"></new-log>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterLogList: Log[] = [];
  public showForm: boolean = false;
  addLog(newLogFromChild) {
    this.masterLogList.push(newLogFromChild);
    this.showForm = false;
  }
  newLogClicked() {
    this.showForm = true;
  }
}
