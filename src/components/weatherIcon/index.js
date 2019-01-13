import React from 'react';
import PropTypes from 'prop-types';

import WbSunny from '@material-ui/icons/WbSunny';
import WbCloudy from '@material-ui/icons/WbCloudy';

import { withStyles } from '@material-ui/core/styles';

const weatherLookup = (icon, classes) => {
  const options = {
    '01d': <WbSunny className={classes.icon} />, // 'clear sky day'
    '01n': <WbSunny className={classes.icon} />, // 'clear sky night'
    '02d': <WbCloudy className={classes.icon} />, // few clouds day',
    '02n': <WbCloudy className={classes.icon} />, // few clouds night
    '03d': <WbCloudy className={classes.icon} />, // scattered clouds day
    '03n': <WbCloudy className={classes.icon} />, // scattered clouds night
    '04d': <WbCloudy className={classes.icon} />, // broken clouds day
    '04n': <WbCloudy className={classes.icon} />, // broken clouds night
    '09d': <WbCloudy className={classes.icon} />, // shower rain day
    '09n': <WbCloudy className={classes.icon} />, // shower rain night
    '10d': <WbCloudy className={classes.icon} />, // rain day
    '10n': <WbCloudy className={classes.icon} />, // rain night
    '11d': <WbCloudy className={classes.icon} />, // thunderstorms day
    '11n': <WbCloudy className={classes.icon} />, // thunderstorms night
    '13d': <WbCloudy className={classes.icon} />, // snow day
    '13n': <WbCloudy className={classes.icon} />, // snow night
    '50d': <WbCloudy className={classes.icon} />, // mist day
    '50n': <WbCloudy className={classes.icon} />, // mist night
  };
  return options[icon];
};

const styles = () => ({
  icon: { fontSize: 80 },
});
const WeatherIcon = props => (
  <div>
    {weatherLookup(props.iconId, props.classes)}
  </div>
);

WeatherIcon.propTypes = {
  iconId: PropTypes.oneOf([
    '01d', // 'clear sky day'
    '01n', // 'clear sky night'
    '02d', // few clouds day',
    '02n', // few clouds night
    '03d', // scattered clouds day
    '03n', // scattered clouds night
    '04d', // broken clouds day
    '04n', // broken clouds night
    '09d', // shower rain day
    '09n', // shower rain night
    '10d', // rain day
    '10n', // rain night
    '11d', // thunderstorms day
    '11n', // thunderstorms night
    '13d', // snow day
    '13n', // snow night
    '50d', // mist day
    '50n', // mist night
  ]).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherIcon);
