import React from 'react';

function WeatherRow(props) {
  return (
    <tr>
      <th>{props.time}</th>
      <th>{props.condition.text}</th>
      <th>{props.temp_c}C ({props.temp_f}F)</th>
      <th>{props.feelslike_c}C ({props.feelslike_f}F)</th>
      <th>{props.wind_dir}</th>
      <th>{props.wind_kph}kph ({props.wind_mph}mph)</th>
    </tr>
  )
}

export default WeatherRow;
