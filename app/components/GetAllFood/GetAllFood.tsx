"use client";
import React, { useEffect, useState } from "react";

interface Food {
  name: string;
  description: string;
  image: string; // Assuming an image property for foods
}

const GetAllFood: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/foods")
      .then((res) => res.json())
      .then((data: Food[]) => {
        setFoods(data);
      })
      .catch((error) => {
        console.error("Error fetching foods:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-20 mt-16">
      {foods.map((food: Food, i: number) => (
        <div className="card card-compact w-96 bg-base-100 shadow-xl" key={i}>
          <figure>
            <img src={food.image} alt="Food" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{food.name}</h2>
            <p>{food.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetAllFood;
