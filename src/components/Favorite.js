import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

class Favorite extends React.Component {
  handleOnClick = recipe => {
    this.props.setFavorite(recipe);

    let index = this.props.allRecipes.indexOf(recipe);

    this.props.setIndex(index);
  };

  displayHeart = recipe => {
    let heart;

    if (recipe.favorite) {
      heart = this.displaySolid();
    } else {
      heart = this.displayBorder();
    }

    return <div>{heart}</div>;
  };

  displaySolid = () => {
    return (
      <div>
        <FontAwesomeIcon
          icon={faSolidHeart}
          size="2x"
          style={{ marginBottom: "1rem", cursor: "pointer", color: "#FF5654" }}
        />
      </div>
    );
  };

  displayBorder = () => {
    return (
      <div>
        <FontAwesomeIcon
          icon={faHeart}
          size="2x"
          style={{ marginBottom: "1rem", cursor: "pointer", color: "#FF5654" }}
        />
      </div>
    );
  };

  render() {
    let recipe = this.props.recipe;

    return (
      <div>
        <div
          key={recipe.recipe_id}
          className="col-md-4"
          style={{ marginBottom: "2rem" }}
        >
          <span onClick={() => this.handleOnClick(recipe)}>
            {this.displayHeart(recipe)}
          </span>
        </div>
      </div>
    );
  }
}

export default Favorite;
