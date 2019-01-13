import React, { Component } from 'react';

import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import WithStore from '../withStore';
import WeatherStore from '../../stores/weatherStore';

import weatherBackgrounds from '../../helpers/weatherBackground';

const styles = {
  card: {
    maxWidth: 345,
    padding: 0,
  },
  content: {
    textAlign: 'center',
  },
};


class WeatherComponent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
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
  uppercaseString(string){
    return (string.charAt(0).toUpperCase() + string.slice(1));
  }

  render() {
    const { weatherData } = this.props.store;
    const { classes } = this.props;
    if (!weatherData) {
      return null;
    }

    const weatherDatum = weatherData.weather[0];
    return (
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt={weatherDatum.description}
          className={classes.media}
          image={weatherBackgrounds[weatherDatum.icon]}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {`${weatherData.name} ${Math.round(weatherData.main.temp - 273)}°C`}
          </Typography>
          <Typography component="p">
            {this.uppercaseString(weatherDatum.description)}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
export default WithStore(WeatherStore)(withStyles(styles)(observer(WeatherComponent)));
