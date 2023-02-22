import { useState } from "react";
import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { DrinkChoise } from "./components/DrinkChoise";
import { DrinkSearch } from "./components/DrinkSearch";
import { coffee, tea } from "./utils/data";

export const App = () => {
  const [userDrink, setUserDrink] = useState();

  const greeting = "Welkom allemaal!";

  return (
    <div className="App">
      {userDrink ? (
        <DrinkChoise drink={userDrink} />
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkButtons drinkOne={coffee.name} drinkTwo={tea.name} />
          <DrinkSearch />
        </>
      )}
    </div>
  );
};

// return (
//   <div className="App">
//     {userDrink && <h1>{greeting}</h1>}
//     <DrinkButtons drinkOne={coffee.name} drinkTwo={tea.name} />
//     {userDrink && <DrinkChoise drink={userDrink} />}
//   </div>
// );
// };
