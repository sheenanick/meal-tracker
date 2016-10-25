import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'log-list',
  inputs: ['childLogList'],
  template: `
    <div *ngIf="childLogList">
      <h3 class="text-center">Log History
      <select (change)="onChangeFilter($event.target.value)">
        <option value="All">Show All</option>
        <option value="High">High Calorie (500+)</option>
        <option value="Low">Low Calorie (<500)</option>
      </select></h3>
      <div *ngFor="let log of childLogList | filter:filterBy">
        <div class="list-div" id="log">
          <p><strong>Name:</strong> {{ log.name }}</p>
          <p><strong>Details:</strong> {{ log.details }}</p>
          <p><strong>Calories:</strong> {{ log.calories }}</p>
          <button class="btn btn-default btn-sm" (click)="editClicked(log)">Edit</button>
        </div>
      </div>
      <edit-log [log]="editLog" (doneClickedSender)="doneClicked($event)"></edit-log>
    </div>
  `
})

export class LogListComponent {
  public childLogList: Log[];
  public filterBy: string = 'All';
  public editLog: Log = null;
  @Output() logEditedSender = new EventEmitter();
  onChangeFilter(optionSelected) {
    this.filterBy = optionSelected;
  }
  editClicked(log: Log) {
    this.editLog = log;
  }
  doneClicked(log: Log) {
    this.editLog = null;
    this.logEditedSender.emit(log);
  }
}
