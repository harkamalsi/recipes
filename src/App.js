import React, { Component } from 'react';
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = "fc22e4b07d45d67cd6890c7edd76da10";

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined, 
    temperature: undefined, 
    wind: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      })
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        wind: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value.",
      })
    }
  }

  render () {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form 
                    getWeather={this.getWeather}
                  />
                  <Weather 
                    city = {this.state.city}
                    country = {this.state.country}
                    temperature = {this.state.temperature}
                    wind = {this.state.wind}
                    humidity = {this.state.humidity}
                    description = {this.state.description}
                    error = {this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;