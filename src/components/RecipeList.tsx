import React from "react";
import { IRecipe } from "./IRecipe";
export const RecipeList = (props: any) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Recipe name</th>
          <th>Recipe Instructions</th>
        </tr>
      </thead>
      <tbody>
        {props?.recipes.map((recipe: IRecipe, index: number) => {
          return (
            <tr key={index}>
              <td>{recipe.name}</td>
              <td>{recipe.instructions}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
