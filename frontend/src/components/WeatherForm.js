import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button }
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

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'London',
    };

    this.locationChanged = this.locationChanged.bind(this);
    this.submitLocation = this.submitLocation.bind(this);
  }

  locationChanged(e) {
    this.setState({ location: e.target.value });
  }

  submitLocation() {
    this.props.onSubmit(this.state.location);
  }

  render() {
    return (
      <div className="weather-form">
        <FieldGroup
          id="location"
          type="text"
          value={this.state.location}
          label="Location (Latitude,Longitude)"
          placeholder="Please enter your location"
          onChange={this.locationChanged}
        />
        <Button onClick={this.submitLocation}>Set Location Naow!</Button>
      </div>
    );
  }
}

export default WeatherForm
