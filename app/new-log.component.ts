import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'new-log',
  inputs: ['showForm'],
  template: `
    <div *ngIf="showForm">
      <div class="form-group">
        <label>Name:</label>
        <input class="form-control" #name>
      </div>
      <div class="form-group">
        <label>Details:</label>
        <input class="form-control" #details>
      </div>
      <div class="form-group">
        <label>Calories:</label>
        <input class="form-control" type="number" #calories>
      </div>
      <div class="form-group">
        <label>Date:</label>
        <input class="form-control" type="datetime-local" #date>
      </div>
      <button class="btn btn-primary" (click)="addClicked(name.value, details.value, calories.value, date.value); name.value=''; details.value=''; calories.value=''; date.value='';">Add</button>
    </div>
  `
})

export class NewLogComponent {
  public showForm: boolean;
  @Output() newLogSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number, date: string) {
    var newDate = new Date(date);
    var newLogToAdd: Log = new Log(name, details, +calories, newDate);
    this.newLogSender.emit(newLogToAdd);
  }

}
