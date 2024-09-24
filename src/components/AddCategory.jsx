import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const changeInput = ({ target }) => setInputValue(target.value);
  const submit = (event) => {
    event.preventDefault();

    const newCategory = inputValue.trim();
    if (newCategory.length <= 1) return;
    
    onNewCategory(newCategory);
    setInputValue("");
  };

  return (
    <>
      <form action="" onSubmit={submit}>
        <input
          type="text"
          placeholder="Buscar GIFs"
          value={inputValue}
          onChange={changeInput}
        />
      </form>
    </>
  );
};
