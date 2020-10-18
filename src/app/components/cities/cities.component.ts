import {Component, OnInit} from '@angular/core';
import {MainService} from '../../services/main.service';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
import {CityInterface} from '../../interfaces/city.interface';

declare var $: any;

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  // Иконка закрытия
  faTime = faTimes;

  // Города из json-файла
  citiesFromJson: CityInterface[];
  citiesFromJsonLoading: boolean;
  citiesFromJsonError: object;

  // Города из localStorage
  citiesFromLocal: CityInterface[];
  citiesFromLocalLoading: boolean;
  citiesFromLocalError: object;

  idsFromLocal: Array<number>;

  // Показывать ли кнопку
  buttonActive = false;
  // Ошибка в модальном окне
  modalError = false;
  // Активный город
  activeCity;

  constructor(
    private mainService: MainService
    ) {
    this.mainService.citiesFromJson.subscribe((cities) => {
      this.citiesFromJson = cities;
      if (this.citiesFromJson.length === this.idsFromLocal.length) {
        this.buttonActive = false;
      }
    });
    this.mainService.citiesFromJsonLoading.subscribe((loading) => {
      this.citiesFromJsonLoading = loading;
    });
    this.mainService.citiesFromLocal.subscribe((cities) => {
      this.citiesFromLocal = cities;
    });
    this.mainService.citiesFromLocalLoading.subscribe((loading) => {
      this.citiesFromLocalLoading = loading;
    });
    this.mainService.idsFromLocal.subscribe((arr) => {
      this.idsFromLocal = arr;
    });
    this.mainService.activeCity.subscribe((city) => {
      this.activeCity = city;
    });
    this.mainService.buttonActive.subscribe((active) => {
      this.buttonActive = active;
    });
  }

  ngOnInit(): void {
    this.mainService.getCitiesFromJson();
    this.mainService.getCitiesFromLocal();
  }

  // Вывод погоды
  // tslint:disable-next-line:typedef
  getWeather(city) {
    this.mainService.getWeather(city);
  }

  // Удаление города из быстрой панели
  // tslint:disable-next-line:typedef
  deleteCity(event, city) {
    // Отменяем всплытие
    event.stopPropagation();
    this.mainService.deleteCityFromLocal(city);
  }

  // Добавление города в быструю панель
  // tslint:disable-next-line:typedef
  addCity(city) {
    if (this.idsFromLocal) {
      if (this.idsFromLocal.indexOf(city.id) === -1) {
        $(`#modal`).modal(`hide`);
        this.mainService.addCityToLocal(city);
      } else {
        this.modalError = true;
        setTimeout(() => this.modalError = false, 1500);
      }
    } else {
      $(`#modal`).modal(`hide`);
      this.mainService.addCityToLocal(city);
    }
  }
}
