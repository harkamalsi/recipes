import React from 'react';

const Weather = props => (
  <div>
    {/*props.city && props.country && <p>Location: {props.city}, {props.country}</p>*/}
    <div>
      <h1 className="first">{props.temperature && <p>Temperatur: {props.temperature}</p>}</h1>
      <h1 className="first">{props.wind && <p>Wind: {props.wind}</p>}</h1>
    </div>
    <h1 className="second">{props.humidity && <p>Humidity: {props.humidity}</p>}</h1>
    <h1 className="third">{props.description && <p>Description: {props.description}</p>}</h1>
    <h1>{props.error && <p>{props.error}</p>}</h1>
  </div>
);

export default Weather;