import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { NewLogComponent }   from './new-log.component';
import { LogListComponent }   from './log-list.component';
import { EditLogComponent }   from './edit-log.component';
import { CaloriesComponent }   from './calories.component';
import { FilterPipe }   from './filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewLogComponent,
    LogListComponent,
    EditLogComponent,
    CaloriesComponent,
    FilterPipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
