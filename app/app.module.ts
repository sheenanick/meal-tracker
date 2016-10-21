import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { NewLogComponent }   from './new-log.component';
import { LogListComponent }   from './log-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewLogComponent,
    LogListComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
