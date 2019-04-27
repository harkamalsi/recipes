import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import LoadingScreen from "./components/svg/landingLoading";
import {
  Link as LinkScroll,
  animateScroll as scroll,
  Element
} from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const API_KEY = "08ee1b4613c342c86f1bf5d398502cff";

//  "2ba01c1d23194ea90f8e8addd404c6b2";

class App extends Component {
  state = {
    recipes: [],
    favRecipe: [],
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

    //Setter inn favorite for hver recipe
    data.recipes.forEach(x => (x.favorite = false));

    this.setState({
      recipes: data.recipes
    });
  };

  clearAll = e => {
    localStorage.clear();
    this.setState({ recipes: [] });
    e.preventDefault();
  };

  componentDidMount = e => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({
      recipes
    });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  handleChange = e => {
    this.setState({
      count: e.target.value
    });
  };

  scrollToRecipes = () => {
    scroll.scrollTo();
  };

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroll.scrollTo("scroll-to-element", {
      duration: 1100,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }

  scrollToWithContainer = e => {
    let goToContainer = new Promise((resolve, reject) => {
      e.scrollEvent.register("end", () => {
        resolve();
        e.scrollEvent.remove("end");
      });

      scroll.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroll.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  };

  setFavorite = recipe => {

    let id = recipe.recipe_id;

    let recipeIndex = this.state.recipes.findIndex(
      recipe => recipe.recipe_id === id
    );

    let recipes = this.state.recipes;
    let favRecipe = recipes[recipeIndex];
        
    favRecipe.favorite = !favRecipe.favorite;

    this.setState({
      recipes,
      favRecipe
    });
  };

  render() {
    return (
      <div className="App">
        {
          <div align="center">
            {<LoadingScreen id="landing" />}
            <LinkScroll
              activeClass="active"
              to="recipes"
              spy={true}
              smooth={true}
              duration={1100}
            >
              <a
                className="buttonExplore"
                style={{ textDecoration: "none" }}
                href="."
              >
                Click here to explore
              </a>
            </LinkScroll>
          </div>
        }
        <Element name="recipes">
          <header className="App-header" id={'recipes'}>
            <div className="grid-2">
              <div>
                <h1 className="App-title">
                  <Link
                    to={{
                      pathname: `/favorites`,
                      state: {
                        favorites: this.state.recipes,
                        setFavorite: this.setFavorite,
                        recipes: this.state.recipes,
                        favRecipe: this.state.favRecipe
                      }
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    Favorite Recipes
                  </Link>
                </h1>{" "}
              </div>
              <div>
                <h1 className="App-title">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={this.clearAll}
                    href="."
                  >
                    Reset Everything
                  </a>
                </h1>{" "}
              </div>
            </div>
          </header>{" "}
          <Form getRecipe={this.getRecipe} />{" "}
          <div
            className="radioButtons"
            style={{
              marginBottom: "1rem",
              padding: "1rem"
            }}
          >
            <input
              type="radio"
              value="5"
              defaultChecked
              name="count"
              onChange={this.handleChange}
              style={{
                padding: "1rem"
              }}
            />
            5{" "}
            <input
              type="radio"
              value="10"
              name="count"
              onChange={this.handleChange}
            />
            10{" "}
            <input
              type="radio"
              value="20"
              name="count"
              onChange={this.handleChange}
            />
            20{" "}
            <input
              type="radio"
              value="30"
              name="count"
              onChange={this.handleChange}
            />
            30{" "}
          </div>{" "}
          {
            <Recipes
              setFavorite={this.setFavorite}
              recipes={this.state.recipes}
              favRecipe={this.state.favRecipe}
              count={this.state.count}
            />
          }{" "}
          <LinkScroll
            activeClass="active"
            to="recipes"
            spy={true}
            smooth={true}
            duration={1100}
          >
            <FontAwesomeIcon
              id="circle-up"
              icon={faArrowAltCircleUp}
              size="3x"
              style={{ marginBottom: "1rem", cursor: "pointer" }}
            />
          </LinkScroll>
        </Element>
      </div>
    );
  }
}
//localStorage.getItem("recipes")
export default App;
