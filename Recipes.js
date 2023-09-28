import React from 'react';
import style from './recipe.module.css'

const Recipes = (props) => {
    


    return (
        <div > 
        {
         props.recipeData.map((recipe) => <div className={style.recipe}>
            <h2>{recipe.recipe.label}</h2>
            <h3>Calories:{recipe.recipe.calories}</h3>
            <ul>{recipe.recipe.ingredients.map(ingredient => <li>
                {ingredient.text}
            </li>) }
                
            </ul>
            <img className={style.image} src={recipe.recipe.image} alt='images'></img>
            
            </div>
         )   
        }
            
        </div>
    );
};

export default Recipes;