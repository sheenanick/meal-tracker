import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'calories-display',
  inputs: ['totalCalories'],
  template: `
    <h3>Total Calories</h3>
    <p>{{ totalCalories }}</p>
  `
})

export class CaloriesComponent {
  public totalCalories: number;
}
