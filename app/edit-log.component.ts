import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'edit-log',
  inputs: ['log'],
  template: `
    <div *ngIf="log">
      <div class="form-group">
        <label>Name:</label>
        <input class="form-control" [(ngModel)]="log.name">
      </div>
      <div class="form-group">
        <label>Details:</label>
        <input class="form-control" [(ngModel)]="log.details">
      </div>
      <div class="form-group">
        <label>Calories:</label>
        <input class="form-control" type="number" [(ngModel)]="log.calories">
      </div>
      <button class="btn btn-default" (click)="doneClicked(log)">Done</button>
    </div>
  `
})

export class EditLogComponent {
  public log: Log;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked(log: Log) {
    this.doneClickedSender.emit(log);
  }
}
