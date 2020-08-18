import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CandlestickChartComponent } from './components/candlestick-chart/candlestick-chart.component';
import { CalculateBmiComponent} from './components/calculate-bmi/calculate-bmi.component';
import { PersonComponent } from './components/person/person.component'
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CandlestickChartComponent,
    CalculateBmiComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
