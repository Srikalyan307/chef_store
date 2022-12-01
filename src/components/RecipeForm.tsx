import React, { ChangeEvent } from "react";
export const RecipeForm = (props: any) => {
  const toggleForm = () => {};
  const [values, setValues] = React.useState({
    name: "",
    instructions: "",
  });
  const handleInputChange = (key: string, event: any) => {
    setValues({ ...values, [key]: event.target.value });
  };
  const submit = (event: any) => {
    event.preventDefault();
    props.addNewRecipe(values);
  };
  return (
    <form onSubmit={submit} autoComplete="off">
      <fieldset style={{ textAlign: "left" }}>
        <legend></legend>
        <label htmlFor="recipe-name">Recipe Name : </label>
        <input
          type="text"
          id="recipe-name"
          onChange={(event: ChangeEvent) => handleInputChange("name", event)}
        />
        <br />
        <label htmlFor="recipe-instructions">Recipe Instructions : </label>
        <input
          type="text"
          id="recipe-instructions"
          onChange={(event: ChangeEvent) =>
            handleInputChange("instructions", event)
          }
        />
        <br />
      </fieldset>
      <br/>
      <button onClick={toggleForm}>Submit</button>
    </form>
  );
};
