"use client";
import React, { useState } from "react";

const AddFoodForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageurl, setImageurl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const productData = {
      name: name,
      description: description,
      image: imageurl,
    };
    console.log(productData);
    // Replace with your actual API endpoint
    fetch("http://localhost:5000/api/food", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Product added successfully!");
          // Clear the form after successful submission (optional)
          setName("");
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
    <form
      onSubmit={handleSubmit}
      className="form mt-16 border border-blue-300 rounded-md shadow-sm p-4"
    >
      <div className="mt-4">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
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
        Add New Food
      </button>
    </form>
  );
};

export default AddFoodForm;
