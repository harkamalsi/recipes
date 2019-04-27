import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import Favorite from "./Favorite";

class Favorites extends React.Component {
  state = {
    favorites: []
  };

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);

    const favorites = recipes.filter(recipe => recipe.favorite === true);

    this.setState({
      favorites
    });
  };

  render() {
    let favorites = this.state.favorites;

    return (
      <div>
        <header className="App-header">
          <div style={{ margin: "0 auto" }}>
            <h1 className="App-title">
              <Link
                to={{
                  pathname: `/`
                }}
                style={{ textDecoration: "none" }}
              >
                Go Home
              </Link>
            </h1>{" "}
          </div>
        </header>

        <div className="container">
          <div className="row">
            {favorites.map(recipe => {
              return (
                <div
                  key={recipe.recipe_id}
                  className="col-md-4"
                  style={{ marginBottom: "2rem" }}
                >
                  <div className="recipes__box">
                    {console.log(recipe)}
                    <LazyLoad>
                      <div className="image">
                        <img
                          className="recipes__box-img"
                          src={recipe.image_url}
                          alt={recipe.title}
                        />
                      </div>
                    </LazyLoad>
                    <div className="recipe__text">
                      <h5 className="recipes__title">
                        {recipe.title.length < 20
                          ? `${recipe.title}`
                          : `${recipe.title.substring(0, 25)}...`}
                      </h5>
                      <p className="recipes__subtitle">
                        Publisher: <span>{recipe.publisher}</span>
                      </p>
                    </div>
                    <button className="recipe_buttons">
                      <Link
                        to={{
                          pathname: `/recipe/${recipe.recipe_id}`,
                          state: { recipe: recipe.title }
                        }}
                      >
                        View Recipe
                      </Link>
                    </button>
                    <div className="heart">
                      <Favorite 
                        allRecipes={this.props.recipes}
                        recipe={recipe}
                        setFavorite={this.props.setFavorite}
                        setIndex={this.props.setIndex}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
