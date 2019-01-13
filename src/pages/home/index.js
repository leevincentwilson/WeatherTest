import React from 'react';
import WeatherComponent from '../../components/weatherComponent';

const styles = {
  alignContent: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  width: '100%',
  height: '100%',
};

const Index = () => (
  <div style={styles}>
    <WeatherComponent />
  </div>
);

export default Index;
