import { Component } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1 class="text-center jumbotron">Meal Tracker</h1>
    <div class="row">
      <div class="col-sm-4">
        <calories-display [totalCalories]="totalCalories"></calories-display>
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
  public totalCalories: number = 0;
  addLog(newLogFromChild) {
    if(newLogFromChild) {
      this.masterLogList.push(newLogFromChild);
      this.totalCalories += newLogFromChild.calories;
    }
    this.showForm = false;
  }
  newLogClicked() {
    this.showForm = true;
  }

}
