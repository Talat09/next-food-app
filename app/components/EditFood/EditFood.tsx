"use client";

import React, { useState } from "react";
const EditFood = ({ id: id }: { id: string }) => {
  // console.log(id);

  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [imageurl, setImageurl] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const productData = {
      name: foodName,
      description: description,
      image: imageurl,
    };
    console.log(productData);
    // Replace with your actual API endpoint
    fetch(`https://food-api-sigma.vercel.app/api/food/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Product added successfully!");
          // Clear the form after successful submission (optional)
          setFoodName("");
          setDescription("");
          setImageurl("");
        } else {
          console.error("Error adding product:", response.statusText);
          // Handle errors here (e.g., display an error message to the user)
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
        // Handle network errors here (e.g., display a generic error message)
      });
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="form  mt-16 border border-blue-300 rounded-md shadow-sm p-4"
      >
        <div className="mt-4">
          <input
            type="text"
            value={foodName}
            onChange={(event) => setFoodName(event.target.value)}
            placeholder="Food Name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="mt-4">
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Food Description"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className=" mt-4">
          <input
            type="text"
            value={imageurl}
            onChange={(event) => setImageurl(event.target.value)}
            placeholder="Food Image Url"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-8">
          Edit Food Details
        </button>
      </form>
    </div>
  );
};

export default EditFood;
