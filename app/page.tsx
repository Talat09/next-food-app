// import AddFoodForm from "./components/AddFoodForm/AddFoodForm";
// import FoodList from "./components/FoodList/FoodList";

import GetAllFood from "./components/GetAllFood/GetAllFood";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center my-6">
        Welcome to Food APP!
      </h1>

      <GetAllFood />
    </main>
  );
}
