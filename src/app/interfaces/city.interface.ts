import {WeatherInterface} from './weather.interface';

export interface CityInterface {
  id: number;
  name: string;
  active: boolean;
  weather?: WeatherInterface;
}
