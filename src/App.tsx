import React from "react";
import "./App.css";
import { IRecipe } from "./components/IRecipe";
import { RecipeForm } from "./components/RecipeForm";
import { RecipeList } from "./components/RecipeList";

const App = () => {
  const [showAddRecipeForm, setShowAddRecipeForm] = React.useState(false);
  const [recipes, setRecipes] = React.useState<IRecipe[]>([]);
  const toggleForm = () => {
    setShowAddRecipeForm(!showAddRecipeForm);
  };
  const addNewRecipe = (values: IRecipe) => {
    const newRecipes = recipes;
    newRecipes.push(values);
    setRecipes(newRecipes);
    toggleForm();
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Recipes</h1>
        {recipes.length === 0 ? (
          <div>There are no recipes to list</div>
        ) : (
          <RecipeList recipes={recipes}></RecipeList>
        )}
        <br />
        {!showAddRecipeForm && <button onClick={toggleForm}>Add Recipe</button>}
        {showAddRecipeForm && (
          <RecipeForm addNewRecipe={addNewRecipe}></RecipeForm>
        )}
      </header>
    </div>
  );
};

export default App;
