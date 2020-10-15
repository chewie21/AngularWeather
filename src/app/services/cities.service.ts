import {EventEmitter, Injectable} from '@angular/core';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class CitiesService {

  citySub: Subscription;
  thisCities;
  thisCitiesId;

  citiesFromJson: EventEmitter<Array<object>> = new EventEmitter<Array<object>>();
  citiesFromLocal: EventEmitter<Array<object>> = new EventEmitter<Array<object>>();
  citiesId: EventEmitter<Set<string>> = new EventEmitter<Set<string>>();
  loadingCities: EventEmitter<boolean> = new EventEmitter<boolean>();
  loadingCitiesError: EventEmitter<object> = new EventEmitter<object>();

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  getCitiesFromJson() {
    // Получаем список городов из json
    this.loadingCities.emit(true);
    if (this.citySub) {
      this.citySub.unsubscribe();
    }
    this.citySub = this.http.get(`assets/city.list.json`)
      .subscribe((response) => {
        // @ts-ignore
        this.citiesFromJson.emit(response);
        this.loadingCities.emit(false);
      }, error => {
        this.loadingCitiesError.emit(error);
        this.loadingCities.emit(false);
      });
  }

  // tslint:disable-next-line:typedef
  getCitiesFromLocal() {
    // Получаем список сохранненых городов
    this.thisCities = JSON.parse(localStorage.getItem('cities'));
    if (!this.thisCities) {
      this.thisCities = [];
      this.thisCitiesId = new Set<string>();
    } else {
      this.getCitiesId(this.thisCities);
    }
    this.citiesFromLocal.emit(this.thisCities);
    this.citiesId.emit(this.thisCitiesId);
  }

  // tslint:disable-next-line:typedef
  getCitiesId(cities) {
    // Создаем сет с id городов для предотвращения дублирования
    this.thisCitiesId = new Set<string>();
    cities.forEach((item) => {
      this.thisCitiesId.add(item.id);
    });
  }

  // tslint:disable-next-line:typedef
  setCities(cities) {
    // Записываем в localStorage
    localStorage.setItem('cities', JSON.stringify(cities));
    this.getCitiesFromLocal();
  }

  // tslint:disable-next-line:typedef
  deleteCity(city, cities) {
    cities.splice(cities.indexOf(city), 1);
    this.setCities(cities);
    this.getCitiesFromLocal();
  }

  // tslint:disable-next-line:typedef
  getWeatherIcon(city) {
    return this.http.get(`${environment.apiUrl}/data/2.5/weather?id=${city.id}&lang=ru&units=metric&APPID=${environment.apiKey}`);
  }
}
