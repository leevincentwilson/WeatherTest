import { observable } from 'mobx';
import axios from 'axios';

const mockData = {
  data: {
    coord: { lon: -0.13, lat: 51.51 },
    weather: [{
      id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n',
    }],
    base: 'stations',
    main: {
      temp: 283.69, pressure: 1010, humidity: 76, temp_min: 283.15, temp_max: 284.15,
    },
    visibility: 10000,
    wind: { speed: 8.7, deg: 270 },
    clouds: { all: 80 },
    dt: 1547401800,
    sys: {
      type: 1, id: 1414, message: 0.004, country: 'GB', sunrise: 1547366442, sunset: 1547396308,
    },
    id: 2643743,
    name: 'London',
    cod: 200,
  },
};
class WeatherStore {
  @observable inFlight = false;

  @observable weatherData;

  getWeatherFor = async (city = 'london') => {
    this.inFlight = true;
    // 5da49dcba2d6945da998e68f5157c552
    // 4bb8a0e7b2c356812e0148ca915f14f2
    // const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5da49dcba2d6945da998e68f5157c552`);
    this.inFlight = false;
    const response = mockData;
    debugger;
    console.log(response.data);
    this.weatherData = response.data;
  }
}

export default new WeatherStore();
