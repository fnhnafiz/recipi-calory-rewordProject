import { useState } from "react";
import Cards from "./Components/Cards/Cards";
import Hero from "./Components/Header/HeaderContent/Hero";
import Navbar from "./Components/Header/Navbar/Navbar";
import OurRecipe from "./Components/RecipeSection/OurRecipe";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";

function App() {
  const [recipeCards, setRecipeCards] = useState([]);
  const [preparingRecipe, setPreparingRecipe] = useState([]);
  const [totalTimes, setTotalTimes] = useState(0);
  const [totalCalories, setTotalClories] = useState(0);

  const addRecipeCards = (recipe) => {
    const allReadyExist = recipeCards.find(
      (oldItem) => oldItem.recipe_id === recipe.recipe_id
    );
    if (allReadyExist) {
      alert("Allready Added");
    } else {
      const newRecipe = [...recipeCards, recipe];
      setRecipeCards(newRecipe);
      // console.log(newRecipe);
    }
    // console.log(recipe);

    // setRecipeCards("click hoice", recipe);
  };
  // console.log(recipeCards);
  const removePreparingButton = (id) => {
    // console.log(id);
    // delete Recipe
    const delletRecipeCard = recipeCards.find(
      (recipe) => recipe.recipe_id === id
    );
    // remove recipe
    const cookingRecipeCard = recipeCards.filter(
      (recipe) => recipe.recipe_id !== id
    );

    setRecipeCards(cookingRecipeCard);

    const newRecipeCookin = [...preparingRecipe, delletRecipeCard];

    setPreparingRecipe(newRecipeCookin);
  };

  const addToTotalTimesAndCalories = (time, calorie) => {
    const newTotalTime = time + totalTimes;
    setTotalTimes(newTotalTime);
    const newTotalCalorie = calorie + totalCalories;
    setTotalClories(newTotalCalorie);
  };
  return (
    <>
      <header className="container mx-auto">
        {/*Navbar */}
        <Navbar></Navbar>
        {/* Hero Section */}
        <Hero></Hero>
      </header>
      {/* Main Section */}
      <main className="container mx-auto">
        {/* Our Recipe Section */}
        <section className="flex justify-center items-center my-32">
          <OurRecipe></OurRecipe>
        </section>
        {/* Cards Section */}
        <section className="flex gap-4 my-32">
          {/* left Cards Section */}
          <div className="w-[70%]  ">
            <Cards addRecipeCards={addRecipeCards}></Cards>
          </div>
          {/* Right Display Card Information */}
          <div className="w-[30%] border rounded-xl">
            <Sidebar
              preparingRecipe={preparingRecipe}
              removePreparingButton={removePreparingButton}
              recipeCards={recipeCards}
              addToTotalTimesAndCalories={addToTotalTimesAndCalories}
              totalTimes={totalTimes}
              totalCalories={totalCalories}
            ></Sidebar>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
