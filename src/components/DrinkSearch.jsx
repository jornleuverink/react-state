import { useState } from "react";
import { TextInput } from "./UI/TextInput";

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState("test");

  return (
    <>
      <label>Zoek je drankje:</label>
      <TextInput />
      <p>{SearchField}</p>
    </>
  );
};
