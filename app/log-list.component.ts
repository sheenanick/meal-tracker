import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'log-list',
  inputs: ['childLogList'],
  template: `
    <div *ngIf="childLogList">
      <h3>Food Logs</h3>
      <select (change)="onChangeFilter($event.target.value)">
        <option value="All">Show All</option>
        <option value="High">High Calorie (500+)</option>
        <option value="Low">Low Calorie (<500)</option>
      </select>
      <div *ngFor="let log of childLogList | filter:filterBy">
        <p>Name: {{ log.name }}</p>
        <p>Details: {{ log.details }}</p>
        <p>Calories: {{ log.calories }}</p>
        <p>Date/Time: {{ log.date | date:'short'}}</p>
        <button class="btn btn-default btn-sm" (click)="editClicked(log)">Edit</button>
      </div>
      <edit-log [log]="editLog" (doneClickedSender)="doneClicked($event)"></edit-log>
    </div>
  `
})

export class LogListComponent {
  public childLogList: Log[];
  public filterBy: string = 'All';
  public editLog: Log = null;
  onChangeFilter(optionSelected) {
    this.filterBy = optionSelected;
  }
  editClicked(log: Log) {
    this.editLog = log;
  }
  doneClicked(log: Log) {
    this.editLog = null;
  }
}
