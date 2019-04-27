import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import Favorite from "./Favorite";

const Recipes = (props) => {

    return (
      <div className="container">
        <div className="row">
          {props.recipes !== null &&
            props.recipes.slice(0, props.count).map(recipe => {
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
                      <Favorite 
                        allRecipes={props.recipes}
                        recipe={recipe}
                        setFavorite={props.setFavorite}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }

export default Recipes;
