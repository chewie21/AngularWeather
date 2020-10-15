import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class WeatherService {

  weatherSub: Subscription;
  weatherInThisCiti: EventEmitter<object> = new EventEmitter<object>();
  loadingWeather: EventEmitter<boolean> = new EventEmitter<boolean>();
  loadingWeatherError: EventEmitter<object> = new EventEmitter<object>();


  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  getWeather(id) {
    this.loadingWeather.emit(true);
    if (this.weatherSub) { this.weatherSub.unsubscribe(); }
    this.weatherSub = this.http.get(`${environment.apiUrl}/data/2.5/weather?id=${id}&lang=ru&units=metric&APPID=${environment.apiKey}`)
      .subscribe((response) => {
        this.weatherInThisCiti.emit(response);
        this.loadingWeather.emit(false);
      }, error => {
        this.loadingWeatherError.emit(error);
        this.loadingWeather.emit(false);
      });
  }

  // tslint:disable-next-line:typedef
  removeWeather() {
    this.weatherInThisCiti.emit(null);
  }
}
