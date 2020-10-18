import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CityInterface} from '../interfaces/city.interface';
import {WeatherInterface} from '../interfaces/weather.interface';

@Injectable()
export class MainService {

  // Параметр для получения значения из объекта
  param = `1h`;

  // Активный город
  activeCity: EventEmitter<number> = new EventEmitter<number>();

  // Города из json-файла
  // Локальные переменные
  idsFromJsonArr: Array<number> = new Array<number>();
  citiesFromJsonArr: Array<CityInterface> = new Array<CityInterface>();
  // Связь с компонентом
  citiesFromJsonLoading: EventEmitter<boolean> = new EventEmitter<boolean>();
  citiesFromJson: EventEmitter<Array<CityInterface>> = new EventEmitter<Array<CityInterface>>();
  citiesFromJsonError: EventEmitter<object> = new EventEmitter<object>();

  // Города из localStorage
  // Локальные переменные
  idsFromLocalArr: Array<number> = new Array<number>();
  citiesFromLocalArr: Array<CityInterface> = new Array<CityInterface>();
  citiesFromLocalError: EventEmitter<object> = new EventEmitter<object>();
  activeCityFromLocal: number;
  // Связь с компонентом
  citiesFromLocalLoading: EventEmitter<boolean> = new EventEmitter<boolean>();
  citiesFromLocal: EventEmitter<Array<CityInterface>> = new EventEmitter<Array<CityInterface>>();
  idsFromLocal: EventEmitter<Array<number>> = new EventEmitter<Array<number>>();
  buttonActive: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Погода
  weatherInThisCiti: EventEmitter<object> = new EventEmitter<object>();

  constructor(private http: HttpClient) {}

  // Получение значения из json файла
  // tslint:disable-next-line:typedef
  getCitiesFromJson() {
    // Запрос к файлу
    this.http.get(`assets/city.list.json`).toPromise()
      .then((response: CityInterface[]) => {
        response.forEach((city) => {
          // Добавляем id каждого города в массив
          this.idsFromJsonArr.push(Number(city.id));
        });
        // Для каждого id создаем переменную типа cityInterface и записываем ее в массив
        this.idsFromJsonArr.forEach((id) => {
          this.getCityInfo(id, this.citiesFromJsonArr, this.citiesFromJson, this.citiesFromJsonLoading,
            () => {
              // После загрузки хотя бы одного города - показываем кнопку
              this.buttonActive.emit(true);
            });
        });
        // Если ошибка - скрываем кнопку
      }).catch(() => this.buttonActive.emit(false));
  }

  // Получение значения из localStorage
  // tslint:disable-next-line:typedef
  getCitiesFromLocal() {
    // Выводим загрузку
    this.citiesFromLocalLoading.emit(true);
    // Обнуляем массив
    this.citiesFromLocalArr = new Array<CityInterface>();
    // Записываем содержимое localStorage в переменную
    this.idsFromLocalArr = JSON.parse(localStorage.getItem('angular-weather-cities'));
    // Если там есть данные
    if (!this.idsFromLocalArr) {
      this.idsFromLocalArr = new Array<number>();
    }
    if (this.idsFromLocalArr.length) {
      // Получаем id последнего активного города
      this.getActiveCity();
      // Для каждого id создаем переменную типа cityInterface и записываем ее в массив
      this.idsFromLocalArr.forEach((id) => {
        this.getCityInfo(id, this.citiesFromLocalArr, this.citiesFromLocal, this.citiesFromLocalLoading,
          (city) => {
            if (this.activeCityFromLocal === city.id) {
              this.getWeather(city);
            }
          });
      });
    } else {
      this.citiesFromLocal.emit(this.citiesFromLocalArr);
      this.citiesFromLocalLoading.emit(false);
    }
    // Отправляем ее для сравнения
    this.idsFromLocal.emit(this.idsFromLocalArr);
  }

  // Добавление города в быстрый доступ
  // tslint:disable-next-line:typedef
  addCityToLocal(city) {
    // Добавляем id выбранного города в массив
    this.idsFromLocalArr.push(city.id);
    // Смотрим - нужно ли убрать кнопку
    if (this.idsFromLocalArr.length === this.citiesFromJsonArr.length) {
      this.buttonActive.emit(false);
    }
    // Делаем города активным
    this.setActiveCity(city.id);
    // Записываем в localStorage
    localStorage.setItem('angular-weather-cities', JSON.stringify(this.idsFromLocalArr));
    // Заного выводим горорда в быстром доступе, так же обновляя данные о погоде в них
    this.getCitiesFromLocal();
    // Выводим погоду для данного города
    this.getWeather(city);
  }

  // Удаление из быстрого доступа
  // tslint:disable-next-line:typedef
  deleteCityFromLocal(city) {
    // Удаляем id выбранного города из массива
    this.idsFromLocalArr.splice(this.idsFromLocalArr.indexOf(city.id), 1);
    // Проверяем - был ли это последний город
    if (!this.idsFromLocalArr.length) {
      // Если да - обнуляем все данные
      this.weatherInThisCiti.emit(null);
      localStorage.setItem('angular-weather-cities', JSON.stringify(this.idsFromLocalArr));
      this.setActiveCity(0);
    } else {
      // Показываем кнопку
      this.buttonActive.emit(true);
      // Если удаленный город был активным
      if (city.id === this.activeCityFromLocal) {
        // Выбираем новый активный город
        this.setActiveCity(this.idsFromLocalArr[0]);
      }
      // Записывавем в localStorage отредактированный массив
      localStorage.setItem('angular-weather-cities', JSON.stringify(this.idsFromLocalArr));
    }
    // Заного выводим города в быстром доступе, так же обновляя данные о погоде в них
    this.getCitiesFromLocal();
  }

  // Получение погоды
  // tslint:disable-next-line:typedef
  getWeather(city) {
    // Передаем значение в компонент погоды
    this.weatherInThisCiti.emit(city);
    // Делаем данный город активным
    this.setActiveCity(city.id);
  }

  // tslint:disable-next-line:typedef
  getCityInfo(id, arr, emit, loading, func) {
    loading.emit(true);
    // tslint:disable-next-line:new-parens
    const city: CityInterface = new class implements CityInterface {
      active: boolean;
      id: number;
      name: string;
      // tslint:disable-next-line:new-parens
      weather: WeatherInterface = new class implements WeatherInterface {
        // @ts-ignore
        clouds: { all: string } = {};
        // @ts-ignore
        main: { temp: string; feels: string; pressure: string; humidity: string } = {};
        // @ts-ignore
        rain: { rain1h: string } = {};
        // @ts-ignore
        snow: { snow1h: string } = {};
        // @ts-ignore
        weather: { id: string; main: string; description: string; icon: string } = {};
        // @ts-ignore
        wind: { speed: string } = {};
      };
    };
    // tslint:disable-next-line:max-line-length
    this.http.get(`${environment.apiUrl}/data/2.5/weather?id=${id}&lang=ru&units=metric&APPID=${environment.apiKey}`).toPromise()
      .then((response: any ) => {
        city.id = response.id;
        city.name = response.name;
        city.active = true;
        city.weather.weather.id = response.weather[0].id;
        city.weather.weather.main = response.weather[0].main;
        city.weather.weather.description = response.weather[0].description;
        city.weather.weather.icon = response.weather[0].icon;
        city.weather.main.temp = response.main.temp;
        city.weather.main.feels = response.main.feels_like;
        city.weather.main.pressure = response.main.pressure;
        city.weather.main.humidity = response.main.humidity;
        if (response.wind) {
          city.weather.wind.speed = response.wind.speed;
        }
        if (response.clouds) {
          city.weather.clouds.all = response.clouds.all;
        }
        if (response.rain) {
          city.weather.rain.rain1h = response.rain[this.param];
        }
        if (response.snow) {
          city.weather.snow.snow1h = response.snow[this.param];
        }
        func(city);
      })
      .catch(() => {
        city.active = false;
      })
      .finally(() => {
        // Добавляем в массив созданный объект
        arr.push(city);
        // Передаем это массив в модуль
        emit.emit(arr);
        // Передаем в модуль, что загрузка завершенна
        loading.emit(false);
      });
  }

  // Записываем активный город
  // tslint:disable-next-line:typedef
  setActiveCity(id) {
    this.activeCityFromLocal = id;
    this.activeCity.emit(this.activeCityFromLocal);
    localStorage.setItem('angular-weather-active', String(this.activeCityFromLocal));
  }

  // Получаем последний активный город
  // tslint:disable-next-line:typedef
  getActiveCity() {
    this.activeCityFromLocal = Number(localStorage.getItem('angular-weather-active'));
    this.activeCity.emit(this.activeCityFromLocal);
  }
}
