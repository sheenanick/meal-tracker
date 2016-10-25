import { Component } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1 class="text-center jumbotron">Meal Tracker</h1>
    <div class="row">
      <div class="col-sm-3">
        <calories-display [totalCalories]="totalCalories"></calories-display>
      </div>
      <div class="col-sm-6">
        <log-list [childLogList]="masterLogList" (logEditedSender)="recalculateCalories($event)"></log-list>
      </div>
      <div class="col-sm-3" id="new-form">
        <div *ngIf="!showForm">
          <button class="btn btn-primary" (click)="newLogClicked()" id="create-btn">Create a New Log Entry</button>
        </div>
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
      this.calculateCalories();
    }
    this.showForm = false;
  }
  newLogClicked() {
    this.showForm = true;
  }
  calculateCalories() {
    this.totalCalories = 0;
    for (let i = 0; i < this.masterLogList.length; i++) {
      this.totalCalories += this.masterLogList[i].calories;
    }
  }
  recalculateCalories(log) {
    this.calculateCalories();
  }
}
