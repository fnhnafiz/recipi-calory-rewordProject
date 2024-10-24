import PropTypes from "prop-types";

const Sidebar = ({
  recipeCards,
  removePreparingButton,
  preparingRecipe,
  addToTotalTimesAndCalories,
  totalTimes,
  totalCalories,
}) => {
  console.log(preparingRecipe);
  // const { recipe_name } = recipeCards;
  return (
    <div className="space-y-6">
      {/* Want to Cook */}
      <h1 className="text-center font-bold text-2xl border-b-2 py-3 mx-4">
        Want To Cook: {recipeCards.length}
      </h1>
      <div className="">
        <table className="table ">
          {/* head */}
          <thead className="font-semibold text-black ">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {recipeCards.map((recipeCard, idx) => (
              <tr key={idx} className="hover text-black">
                <th>{idx + 1}</th>
                <td>{recipeCard.recipe_name}</td>
                <td>{recipeCard.preparing_time}</td>
                <td>{recipeCard.calories}</td>

                <td>
                  <button
                    onClick={() => {
                      removePreparingButton(recipeCard.recipe_id),
                        addToTotalTimesAndCalories(
                          recipeCard.preparing_time,
                          recipeCard.calories
                        );
                    }}
                    className="rounded-full font-bold px-[10px] text-black btn bg-green-400"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Preparing To COking */}
      <div className="overflow-x-auto px-2">
        <h1 className="text-center text-black text-2xl font-bold border-b-2 py-4 mx-4">
          Prepare To Cooking: {preparingRecipe.length}
        </h1>
        <table className="table ">
          {/* head */}
          <thead className="text-black ">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {preparingRecipe.map((recipeCard, idxc) => (
              <tr key={idxc} className="hover">
                <th>{idxc + 1}</th>
                <td>{recipeCard.recipe_name}</td>
                <td className="font-semibold">{recipeCard.preparing_time}</td>
                <td className="font-semibold">{recipeCard.calories}</td>
              </tr>
            ))}
            <tr className="font-bold text-black">
              <th></th>
              <td></td>
              <td>
                Total Time :{" "}
                <span className="text-red-500">{totalTimes} minutes</span>
              </td>
              <td>
                Total Calories :{" "}
                <span className="text-red-500">{totalCalories} minutes</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  recipeCards: PropTypes.array.isRequired,
  removePreparingButton: PropTypes.func,
  preparingRecipe: PropTypes.func,
  addToTotalTimesAndCalories: PropTypes.func,
  totalTimes: PropTypes.object,
  totalCalories: PropTypes.object,
};
export default Sidebar;
