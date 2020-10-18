export interface WeatherInterface {
  weather: {
    id: string;
    main: string;
    description: string;
    icon: string;
  };
  main: {
    temp: string;
    feels: string;
    pressure: string;
    humidity: string;
  };
  wind?: {
    speed: string;
  };
  clouds?: {
    all: string;
  };
  rain?: {
    rain1h: string;
  };
  snow?: {
    snow1h: string;
  };
}
