import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'edit-log',
  inputs: ['log'],
  template: `
    <div *ngIf="log" class="list-div" id="edit-form">
      <div class="form-group row">
        <label class="col-xs-2">Name:</label>
        <div class="col-xs-10">
          <input class="form-control" [(ngModel)]="log.name">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-xs-2">Details:</label>
        <div class="col-xs-10">
          <input class="form-control" [(ngModel)]="log.details">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-xs-2">Calories:</label>
        <div class="col-xs-10">
          <input class="form-control" type="number" [(ngModel)]="log.calories">
        </div>
      </div>
      <button class="btn btn-default btn-sm" (click)="doneClicked(log)">Done</button>
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
