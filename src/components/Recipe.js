import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './loader/Loading';


const API_KEY = "08ee1b4613c342c86f1bf5d398502cff";

//"2ba01c1d23194ea90f8e8addd404c6b2";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
  }

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div>
        <div className="container">
          {
            this.state.activeRecipe.length === 0 && <Loading />
          }

          { this.state.activeRecipe.length !== 0 &&
            <div className="active-recipe">
              <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
              <h3 className="active-recipe__title">{ recipe.title }</h3>
              <h4 className="active-recipe__title">
                Publisher: <span>{ recipe.publisher }</span>
              </h4>
              <p className="active-recipe__website">
                Website: <span><a href={recipe.publisher_url} target="_blank" rel="noopener noreferrer" >{recipe.publisher_url}</a></span>
              </p>
              <button className="active-recipe__button">
                <Link to="/">Go Home</Link>
              </button>
              <button className="active-recipe__button">
                <Link to="/favorites">Go to favorites</Link>
              </button>
            </div>            
          }
        </div>
      </div>
    );
  };
}

export default Recipe;  