import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock }
  from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

function WeatherForm(props) {
  return (
    <div className="weather-form">
    <FieldGroup
      id="location"
      type="text"
      label="Location (Latitude,Longitude)"
      placeholder="Please enter your location"
    />
    </div>
  );
}

export default WeatherForm
