import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatSliderModule} from '@angular/material/slider';
import {MatCardModule}  from '@angular/material/card'
import {MatButtonModule } from '@angular/material/button'


import { AppComponent } from './app.component';
import { ExpenseCardComponent } from './componets/expense-card/expense-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
