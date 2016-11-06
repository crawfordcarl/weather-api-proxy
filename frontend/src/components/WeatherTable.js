import React from 'react';
import { Table } from 'react-bootstrap';
import WeatherRow from './WeatherRow';

function WeatherTable(props) {
  if(!props.data || props.data.length === 0) {
    return (<h3>No data to show</h3>);
  }

  let tableRows = props.data.map(
    (item) => (<WeatherRow {...item} key={item.time}/>));
  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Time</th>
          <th>Condition</th>
          <th>Temp</th>
          <th>Feels Like</th>
          <th>Wind Direction</th>
          <th>Wind Speed</th>
        </tr>
      </thead>
      <tbody>
        {tableRows ? tableRows : null}
      </tbody>
    </Table>
  );
}

export default WeatherTable;
