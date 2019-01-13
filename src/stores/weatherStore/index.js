import { observable } from 'mobx';
import axios from 'axios';

class WeatherStore {
  @observable inFlight = false;

  @observable weatherData;

  getWeatherFor = async (city = 'london') => {
    this.inFlight = true;
    //todo error handloing
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=4bb8a0e7b2c356812e0148ca915f14f2`);
    this.inFlight = false;
    this.weatherData = response.data;
  }
}

export default new WeatherStore();
