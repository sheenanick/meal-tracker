import { Pipe, PipeTransform } from '@angular/core';
import { Log } from './log.model';

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: Log[], filterBy) {
    var output: Log[] = [];
    if(filterBy === 'Low'){
      for(var i = 0; i < input.length; i++) {
        if(input[i].calories < 500) {
          output.push(input[i])
        }
      }
    } else if(filterBy === 'High'){
      for(var i = 0; i < input.length; i++) {
        if(input[i].calories >= 500) {
          output.push(input[i])
        }
      }
    } else {
      return input;
    }
    return output;
  }
}
