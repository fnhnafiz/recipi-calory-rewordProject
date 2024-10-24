import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
const Cards = ({ addRecipeCards }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/recipecalory.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  //   console.log(cards);
  return (
    <div className="md:grid md:grid-cols-2 md:gap-5 ">
      {cards.map((card) => (
        <div
          key={card.recipe_id}
          className="card bg-base-100 shadow-xl p-6 border space-y-3"
        >
          <figure>
            <img className="h-52 w-full" src={card.recipe_image} alt="Shoes" />
          </figure>
          <div className=" space-y-5">
            <div className="space-y-3">
              <h2 className="card-title font-bold text-xl">
                {card.recipe_name}
              </h2>
              <p className="text-gray-400">{card.short_description}</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-xl">
                Ingredients: {card.ingredients.length}
              </h3>
              <ul className="pl-8">
                {card.ingredients.map((item, index) => (
                  <li className="list-disc text-gray-400" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-6 items-center">
              <div className="flex gap-3 items-center">
                <i className="fa-regular fa-clock"></i>
                <p className="text-gray-500 font-semibold">
                  {card.preparing_time} minutes
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <i className="fa-solid fa-fire-flame-curved"></i>
                <p className="text-gray-500 font-semibold">
                  {card.calories} minutes
                </p>
              </div>
            </div>
            <div className="card-actions justify-center">
              <button
                onClick={() => addRecipeCards(card)}
                className="btn bg-[#0BE58A] text-xl text-black font-bold rounded-full"
              >
                Want to Cook
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Cards.propTypes = {
  addRecipeCards: PropTypes.func.isRequired,
  preparingRecipe: PropTypes.array.isRequired,
};
export default Cards;
