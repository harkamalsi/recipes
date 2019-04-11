import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import { Link } from "react-router-dom";

const API_KEY = "08ee1b4613c342c86f1bf5d398502cff";

//  "2ba01c1d23194ea90f8e8addd404c6b2";

class App extends Component {
  state = {
    recipes: [],
    count: 5
  };

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=${
        this.state.count
      }`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState({ recipes: data.recipes });
  };

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ count: value });
  };

  render() {
    console.log(this.state.recipes);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/" style={{ textDecoration: "none" }}>
              Recipe Search
            </Link>
          </h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <div className="radioButtons" style={{ marginBottom: "1rem" }}>
          <input
            type="radio"
            value="5"
            defaultChecked
            name="count"
            onChange={this.handleChange}
          />
          5
          <input
            type="radio"
            value="10"
            name="count"
            onChange={this.handleChange}
          />
          10
          <input
            type="radio"
            value="15"
            name="count"
            onChange={this.handleChange}
          />
          20
          <input
            type="radio"
            value="15"
            name="count"
            onChange={this.handleChange}
          />
          30
        </div>
        {localStorage.getItem("recipes") && this.state.recipes.length !== 0 && (
          <Recipes recipes={this.state.recipes} count={this.state.count} />
        )}
      </div>
    );
  }
}

export default App;
