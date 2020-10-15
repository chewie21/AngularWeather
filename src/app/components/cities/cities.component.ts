import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {CitiesService} from '../../services/cities.service';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';

declare var $: any;

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [CitiesService]
})
export class CitiesComponent implements OnInit {

  // Иконка закрытия
  faTime = faTimes;
  // Ошибка при добавлении города
  error;
  // Показать кнопку
  buttonDisplay = false;

  thisCitiesFromJson;
  thisCitiesFromLocal;
  thisCitiesId;
  thisLoading;
  thisLoadingError;

  constructor(
    private weatherService: WeatherService,
    private citiesService: CitiesService
    ) {
    this.citiesService.citiesFromLocal.subscribe((cities) => {
      this.thisCitiesFromLocal = cities;
    });
    this.citiesService.citiesId.subscribe((id) => {
      this.thisCitiesId = id;
    });
    this.citiesService.loadingCities.subscribe((loading) => {
      this.thisLoading = loading;
    });
    this.citiesService.loadingCitiesError.subscribe((error) => {
      this.thisLoadingError = error;
    });
    if (!this.thisLoadingError) {
      this.citiesService.citiesFromJson.subscribe((cities) => {
        this.thisCitiesFromJson = cities;
        if (this.thisCitiesFromLocal.length !== this.thisCitiesFromJson.length) {
          this.buttonDisplay = true;
        }
      });
    }
  }

  ngOnInit(): void {
    this.citiesService.getCitiesFromJson();
    this.citiesService.getCitiesFromLocal();
    if (this.thisCitiesFromLocal) {
      this.thisCitiesFromLocal.forEach((item) => {
        if (item.active) {
          this.getWeather(item);
          return;
        }
      });
    }
  }

  // tslint:disable-next-line:typedef
  getWeather(city) {
    this.thisCitiesFromLocal.forEach((item) => {
      item.active = item.id === city.id;
    });
    this.citiesService.setCities(this.thisCitiesFromLocal);
    this.weatherService.getWeather(city.id);
  }

  // tslint:disable-next-line:typedef
  setCity(city) {
    if (!this.thisCitiesId.has(city.id)) {
      this.citiesService.getWeatherIcon(city).toPromise()
        .then((response) => {
          // @ts-ignore
          city.icon = response.weather[0].icon;
        }).catch(() => city.icon = null)
        .finally(() => {
          // Добавляем город в массив и в сторадж и обновляем сет с id
          this.thisCitiesFromLocal.push(city);
          this.citiesService.setCities(this.thisCitiesFromLocal);
          // Закрываем модалку и ошибку
          this.error = false;
          $(`#modal`).modal(`hide`);
          // Получаем данные о погоде
          this.getWeather(city);
          if (this.thisCitiesFromLocal.length === this.thisCitiesFromJson.length) {
            this.buttonDisplay = false;
          }
        });
    } else {
      this.error = true;
      setTimeout(() => this.error = false, 1500);
    }
  }

  // tslint:disable-next-line:typedef
  deleteCity(event, city) {
    event.preventDefault();
    event.stopPropagation();
    this.citiesService.deleteCity(city, this.thisCitiesFromLocal);
    if (this.thisCitiesFromLocal.length) {
      this.getWeather(this.thisCitiesFromLocal[0]);
    } else  {
      this.weatherService.removeWeather();
    }
    if (this.thisCitiesFromLocal.length < this.thisCitiesFromJson.length) {
      this.buttonDisplay = true;
    }
  }
}
