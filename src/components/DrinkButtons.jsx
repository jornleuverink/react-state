import "./Drinkbuttons.css";
import { Button } from "./UI/Button";

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
  return (
    <>
      <h2>Wilt u koffie of thee?</h2>
      <div className="button-group">
        <Button text={drinkOne} />
        <Button text={drinkTwo} />
      </div>
    </>
  );
};
