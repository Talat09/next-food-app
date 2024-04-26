import React from "react";
import AddFoodForm from "../components/AddFoodForm/AddFoodForm";

function page() {
  return (
    <div className=" flex flex-col items-center  min-h-screen py-2 ">
      <h1 className="text-4xl font-bold text-center my-6">Add New Food Page</h1>
      <AddFoodForm />
    </div>
  );
}

export default page;
