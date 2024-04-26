"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
interface Food {
  _id: string;
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
  const handleDelete = async (foodId: string) => {
    console.log(foodId);

    try {
      const response = await fetch(
        `http://localhost:5000/api/foods/${foodId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Food deleted successfully!");
        // Update the local state to reflect the deletion
        setFoods(foods);
      } else {
        console.error("Error deleting food:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-10  my-16">
        {foods.map((food: Food, i: number) => (
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl "
            key={i}
          >
            <figure>
              <Image
                className="w-full"
                height={100}
                width={100}
                src={food.image}
                alt="Food"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{food.name}</h2>
              <p>{food.description}</p>
              <div className="card-actions justify-end">
                <Link href={`/editfood/${food._id}`}>
                  <button className="btn btn-primary">Edit</button>
                </Link>

                <button
                  className="btn btn-warning"
                  onClick={() => handleDelete(food._id)}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllFood;
