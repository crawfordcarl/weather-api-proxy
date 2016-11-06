import React from 'react';
import { Table } from 'react-bootstrap';
import WeatherRow from './WeatherRow';

function WeatherTable(props) {

  let data = props.data ? props.data : [1, 2, 3];
  let tableRows = data.map((item) => (<WeatherRow {...item} />));
  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Head1</th>
          <th>Head2</th>
        </tr>
      </thead>
      <tbody>
        {tableRows ? tableRows : null}
      </tbody>
    </Table>
  );
}

export default WeatherTable;
