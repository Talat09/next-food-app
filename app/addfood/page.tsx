import React from "react";
import AddFoodForm from "../components/AddFoodForm/AddFoodForm";

function page() {
  return (
    <div className=" flex flex-col items-center  min-h-screen py-2 ">
      <AddFoodForm />
    </div>
  );
}

export default page;
