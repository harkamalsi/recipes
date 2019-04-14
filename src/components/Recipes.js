import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

//console.log(recipes[0]);
//const favorites = JSON.parse(JSON.stringify(recipes));
class Recipes extends React.Component {
  state = {
    recipes: [],
    favorites: [],
    id: null
  };

  handleFavorite = (e) => {
    this.setState({ saved: !this.state.saved });
    const recipes = Object.values(this.props.recipes);
    recipes.map(recipe => {
      if (this.state.saved) {
        Object.assign(recipe, { favorite: true });
      }
    });
    this.setState({ favorites: recipes });
    console.log(e.target.recipe_id);
  };

  componentDidMount() {
    let recipes = this.props.recipes;
    this.setState(recipes);
  }

  render() {
    let heart;

    if (!this.state.saved) {
      heart = (
        <FontAwesomeIcon
          icon={faHeart}
          size="2x"
          style={{ marginBottom: "1rem", cursor: "pointer", color: "#FF5654" }}
        />
      );
    } else {
      heart = (
        <FontAwesomeIcon
          icon={faSolidHeart}
          size="2x"
          style={{ marginBottom: "1rem", cursor: "pointer", color: "#FF5654" }}
        />
      );
    }

    return (
      <div className="container">
        <div className="row">
          {this.props.recipes !== null &&
            this.props.recipes.slice(0, this.props.count).map(recipe => {
              return (
                <div
                  key={recipe.recipe_id}
                  className="col-md-4"
                  style={{ marginBottom: "2rem" }}
                >
                  <div className="recipes__box">
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
                      <span recipeId = { recipe.recipe_id } onClick={this.handleFavorite}>{heart}</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Recipes;

