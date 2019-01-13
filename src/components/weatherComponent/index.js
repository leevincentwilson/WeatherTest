import React, { Component } from 'react';

import { observer, PropTypes as MobXPropTypes } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import WeatherStore from '../../stores/weatherStore';
import WithStore from '../withStore';

const styles = {};
class WeatherComponent extends Component {
  constructor(props) {
    super(props);
    props.store.getWeatherFor();
  }

  render() {
    console.log(this.props.store.weatherData.weather);

    return (
      <div>
        WeatherComoonents
      </div>
    );
  }
}
export default WithStore(WeatherStore)(withStyles(styles)(observer(WeatherComponent)));
