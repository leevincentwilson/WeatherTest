import React, { Component } from 'react';

import { observer, PropTypes as MobXPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import WeatherStore from '../../stores/weatherStore';
import WithStore from '../withStore';

import WeatherIcon from '../weatherIcon';

const styles = {};
class WeatherComponent extends Component {
  static propTypes = {
    store: PropTypes.shape({
      getWeatherFor: PropTypes.func.isRequired,
      inFlight: PropTypes.bool.isRequired,
      weatherData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        main: PropTypes.shape({
          temp: PropTypes.number.isRequired,
          pressure: PropTypes.number.isRequired,
          humidity: PropTypes.number.isRequired,
          temp_min: PropTypes.number.isRequired,
          temp_max: PropTypes.number.isRequired,
        }).isRequired,
        weather: PropTypes.arrayOf(
          PropTypes.shape({
            description: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            main: PropTypes.string.isRequired,
          }).isRequired,
        ).isRequired,
      }),
    }).isRequired,
  };

  constructor(props) {
    super(props);
    props.store.getWeatherFor();
  }

  render() {
    const { weatherData } = this.props.store;
    if (!weatherData) {
      return null;
    }

    return (
      <Paper elevation={1}>
        {weatherData.name}
        {Math.round(weatherData.main.temp - 273)}
        {weatherData.weather[0].description}
        <WeatherIcon iconId={weatherData.weather[0].icon} />
      </Paper>
    );
  }
}
export default WithStore(WeatherStore)(withStyles(styles)(observer(WeatherComponent)));
