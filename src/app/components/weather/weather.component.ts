import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {getLocaleDateFormat} from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

  thisLoading = false;
  thisError;

  thisWeather;
  thisWeatherData;

  constructor(private weatherService: WeatherService) {
    // Начало загрузки
    this.weatherService.loadingWeather.subscribe((loading) => {
      this.thisLoading = loading;
    });
    // Смотрим на наличие ошибок
    this.weatherService.loadingWeatherError.subscribe((error) => {
      this.thisError = error;
    });
    // Если нет ошибок
    if (!this.thisError) {
      this.weatherService.weatherInThisCiti.subscribe((weather) => {
        // Получаем ответ - если есть ответ - записываем
        if (weather) {
          this.thisWeatherData = weather;
          // Получаем конкретный объект
          this.thisWeather = this.thisWeatherData.weather[0];
        } else {
          this.thisWeather = null;
        }
      });
    }
  }

  ngOnInit(): void {
  }
}
