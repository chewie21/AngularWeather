import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { WeatherComponent } from './components/weather/weather.component';
import {HttpClientModule} from '@angular/common/http';
import { CitiesComponent } from './components/cities/cities.component';
import {WeatherService} from './services/weather.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {StringPipe} from './pipes/string.pipe';
import {DegreesPipe} from './pipes/degrees.pipe';
import {PressurePipe} from './pipes/pressure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WeatherComponent,
    CitiesComponent,
    StringPipe,
    DegreesPipe,
    PressurePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule { }
