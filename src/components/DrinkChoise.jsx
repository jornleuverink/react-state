export const DrinkChoise = ({ drink }) => {
  return (
    <>
      <h2>Uw keuze: {drink.name}</h2>
      <img src={drink.imgUrl} width={100} height={100} alt={drink.alt} />
      <p>Je drankie is over een paar minuutjes klaar!</p>
    </>
  );
};
