import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CandlestickChartComponent } from './components/candlestick-chart/candlestick-chart.component';
import { CalculateBmiComponent} from './components/calculate-bmi/calculate-bmi.component';
import { PersonComponent } from './components/person/person.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrdersComponent } from './components/orders/orders.component'
import { LearnRxjsComponent } from  './components/learn-rxjs/learn-rxjs.component'
import { RobotComponent} from './components/robot/robot.component';
import { MoneyComponent } from './components/money/money.component';
import { SongComponent } from './components/song/song.component';
import { AlbumComponent } from './components/album/album.component'
import { UtilService } from './services/util.service';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CandlestickChartComponent,
    CalculateBmiComponent,
    PersonComponent,
    OrdersComponent,
    LearnRxjsComponent,
    RobotComponent,
    MoneyComponent,
    SongComponent,
    AlbumComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent],
})
export class AppModule { }
