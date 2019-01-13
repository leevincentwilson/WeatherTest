import clearSkyDay from '../assets/clearSkyDay.jpg';
import clearSkyNight from '../assets/clearSkyNight.jpg';
import fewCloudsDay from '../assets/fewCloudsDay.jpg';
import fewCloudsNight from '../assets/fewCloudsNight.jpg';
import thunderStormsDay from '../assets/thunderStormsDay.jpg';
import thunderStormsNight from '../assets/thunderStormsNight.jpg';
import snowDay from '../assets/snowDay.jpg';
import snowNight from '../assets/snowNight.jpg';
import mistDay from '../assets/mistDay.jpg';
import mistNight from '../assets/mistNight.jpg';

const weatherLookup = {
  '01d': clearSkyDay, // 'clear sky day'
  '01n': clearSkyNight, // 'clear sky night'
  '02d': fewCloudsDay, // few clouds day',
  '02n': fewCloudsNight, // few clouds night
  '03d': fewCloudsDay, // scattered clouds day
  '03n': fewCloudsNight, // scattered clouds night
  '04d': fewCloudsDay, // broken clouds day
  '04n': fewCloudsNight, // broken clouds night
  '09d': fewCloudsDay, // shower rain day
  '09n': fewCloudsNight, // shower rain night
  '10d': fewCloudsDay, // rain day
  '10n': fewCloudsNight, // rain night
  '11d': thunderStormsDay, // thunderstorms day
  '11n': thunderStormsNight, // thunderstorms night
  '13d': snowDay, // snow day
  '13n': snowNight, // snow night
  '50d': mistDay, // mist day
  '50n': mistNight, // mist night
};

export default weatherLookup;
