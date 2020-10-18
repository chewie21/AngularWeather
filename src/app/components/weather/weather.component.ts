import {Component, OnInit} from '@angular/core';
import {MainService} from '../../services/main.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

  weather;

  constructor(private mainService: MainService) {
    // Начало загрузки
    this.mainService.weatherInThisCiti.subscribe((weather) => {
      this.weather = weather;
    });
  }

  ngOnInit(): void {
  }
}
