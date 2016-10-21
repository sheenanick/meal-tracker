import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'log-list',
  inputs: ['childLogList'],
  template: `
    <div *ngIf="childLogList">
      <div *ngFor="let log of childLogList">
        <p>Name: {{ log.name }}</p>
        <p>Details: {{ log.details }}</p>
        <p>Calories: {{ log.calories }}</p>
      </div>
    </div>
  `
})

export class LogListComponent {
  public childLogList: Log[];
}
