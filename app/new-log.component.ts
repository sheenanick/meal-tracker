import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'new-log',
  inputs: ['showForm'],
  template: `
    <div *ngIf="showForm">
      <h3>Add New Log</h3>
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
      <button class="btn btn-primary" (click)="addClicked(name.value, details.value, calories.value); name.value=''; details.value=''; calories.value='';">Add</button>
      <button class="btn btn-danger" (click)="cancelClicked()">Cancel</button>
    </div>
  `
})

export class NewLogComponent {
  public showForm: boolean;
  @Output() newLogSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number) {
    var newLogToAdd: Log = new Log(name, details, +calories);
    this.newLogSender.emit(newLogToAdd);
  }
  cancelClicked() {
    this.newLogSender.emit(null);
  }

}
