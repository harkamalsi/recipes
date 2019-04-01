import React from 'react';

const Form = props => (
  <div>
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="Type in the city"/>
      <input type="text" name="country" placeholder="Type in the country code"/>
      <button>Get Weather</button>
    </form>
  </div>
);

export default Form;