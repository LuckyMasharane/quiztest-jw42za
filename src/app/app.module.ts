import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSelectModule,
  MatCardModule,
} from '@angular/material';


import { AppComponent } from './app.component';
import { QuizService } from './quiz.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatCardModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [QuizService]
})
export class AppModule { }
